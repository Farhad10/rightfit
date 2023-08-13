"use client";
import { useEffect, useState } from "react";

// REACT COMPONENTS //
import Image from "next/image";

// CSS //
import "react-tippy/dist/tippy.css";

// PLUGINS //
import { Tooltip } from "react-tippy";
import { useCart } from "../../context/cartContext";

const YourComponent = () => {
  // Define States
  const [data, setData] = useState(null);
  const [colorData, setColorData] = useState(null);
  const [materialData, setMaterialData] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState("all"); // Set to a default value
  const { addToCart, notification } = useCart();
  const [currentPage, setCurrentPage] = useState(1);

  // Define Variables
  const itemsPerPage = 4; // Number of items to show per page

  // Function to generate an array of page numbers based on the total number of products and items displayed per page.
  const generatePageNumbers = (totalProducts, itemsPerPage) => {
    // Calculate the total number of pages required to display all products with the given items per page.
    const totalPages = Math.ceil(totalProducts / itemsPerPage);

    // Create an array with a length equal to the total number of pages.
    // Fill the array with values representing the page numbers.
    const pageNumbers = Array.from(
      { length: totalPages },
      (_, index) => index + 1
    );

    // Return the array of page numbers.
    return pageNumbers;
  };

  // Function to handle the click event on a category.
  const handleCategoryClick = (categoryId) => {
    // Update the selected category based on the clicked category.
    setSelectedCategory(categoryId);
  };

  // Use Effect
  // Use a single useEffect for fetching all data
  useEffect(() => {
    // Define an asynchronous function to fetch data
    const fetchData = async () => {
      try {
        // Fetch product data based on selected category and current page
        let productUrl;
        if (selectedCategory && selectedCategory !== "all") {
          productUrl = `https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products?colorId=${encodeURIComponent(
            selectedCategory
          )}`;
        } else {
          productUrl =
            "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/products";
        }

        // Fetch material data
        const materialUrl =
          "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/material";

        // Fetch category (color) data
        const categoriesUrl =
          "https://api.sheety.co/af35b536915ec576818d468cf2a6505c/reactjsTest/colors";

        // Fetch all data concurrently using Promise.all
        const [productResponse, materialResponse, categoriesResponse] =
          await Promise.all([
            fetch(productUrl, {
              method: "GET",
              headers: {
                Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
                "Content-Type": "application/json",
              },
            }),
            fetch(materialUrl, {
              method: "GET",
              headers: {
                Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
                "Content-Type": "application/json",
              },
            }),
            fetch(categoriesUrl, {
              method: "GET",
              headers: {
                Authorization: "Bearer Ex9yLyRU7wvyxfblpq5HAhfQqUP1vIyo",
                "Content-Type": "application/json",
              },
            }),
          ]);

        // Process product data response
        if (productResponse.ok) {
          const productData = await productResponse.json();
          setData(productData);
        } else {
          console.error(
            "Product API request failed:",
            productResponse.statusText
          );
        }

        // Process material data response
        if (materialResponse.ok) {
          const materialData = await materialResponse.json();
          setMaterialData(materialData);
        } else {
          console.error(
            "Material API request failed:",
            materialResponse.statusText
          );
        }

        // Process category (color) data response
        if (categoriesResponse.ok) {
          const colorData = await categoriesResponse.json();
          setColorData(colorData);
        } else {
          console.error(
            "Color API request failed:",
            categoriesResponse.statusText
          );
        }
      } catch (error) {
        console.error("An error occurred:", error);
      }
    };

    // Call the fetchData function to initiate data fetching
    fetchData();
  }, [selectedCategory, currentPage]);

  // console.log("material",materialData)
  return (
    <div className="lg:mt-20 mt-6 lg:flex">
      {notification && (
        <div className="notification mt-16 z-50">{notification}</div>
      )}
      <div className="lg:w-[15%] text-center lg:border-r p-4 ">
        <div>
          <h2 className="text-xl my-6">Colors</h2>
          {colorData !== null ? (
            colorData.colors.map((curElem) => (
              <div key={curElem.id}>
                <button
                  className={`hover:scale-110 border-b transition transform duration-500 text-md mt-2 uppercase ${
                    selectedCategory === curElem.id
                      ? "text-[#c60000]"
                      : "hover:text-[#c60000]"
                  }`}
                  onClick={() => handleCategoryClick(curElem.id)}
                >
                  {curElem.name}
                </button>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
        <div>
          <h2 className="text-xl my-6">Materials</h2>
          {materialData !== null ? (
            materialData.material.map((curElem) => (
              <div key={curElem.id}>
                <button
                  className={`hover:scale-110 border-b transition transform duration-500 text-md mt-2 uppercase ${
                    selectedCategory === curElem.id
                      ? "text-[#c60000]"
                      : "hover:text-[#c60000]"
                  }`}
                  onClick={() => handleCategoryClick(curElem.id)}
                >
                  {curElem.name}
                </button>
              </div>
            ))
          ) : (
            <p>Loading categories...</p>
          )}
        </div>
      </div>
      <div className="lg:w-[85%]">
        <div>
          {data ? (
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 my-4 mx-12">
              {data.products
                .slice(
                  (currentPage - 1) * itemsPerPage,
                  currentPage * itemsPerPage
                )
                .map((product, index) => (
                  <div key={product.id} className="group cursor-pointer relative">
                    {/* Card */}
                    <div
                      onClick={() => addToCart(product)}
                      className="group-hover:scale-110   group-hover:opacity-20 group-hover:dark:bg-black border rounded-2xl transition transform duration-500"
                    >
                      <Image
                        src={product.image}
                        alt="product image"
                        width={500}
                        height={500}
                        className="h-80 rounded-2xl"
                      />

                      <h2 className="text-center text-lg mt-2">
                        {product.name}
                      </h2>

                      <div className="text-center text-lg ">
                        {product.price} $
                      </div>
                    </div>

                    {/* Cart Icon */}
                    <div className="absolute pointer-events-none group-hover:block top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2  hidden ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="1.5"
                        stroke="currentColor"
                        class="w-6 h-6  m-auto"
                      >
                        <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                        />
                      </svg>
                      <p className="text-center">Add To Cart</p>
                    </div>
                  </div>
                ))}
            </div>
          ) : (
            <p>Loading products...</p>
          )}
        </div>
        <div>
          <div className="flex justify-center mt-10">
            <Tooltip title="Previos" position="top">
              <button
                className="mx-6 rounded-full border p-2 hover:scale-110  transition transform duration-500"
                onClick={() => setCurrentPage(currentPage - 1)}
                disabled={currentPage === 1}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="  w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 19.5L8.25 12l7.5-7.5"
                  />
                </svg>
              </button>
            </Tooltip>
            {generatePageNumbers(data?.products.length || 0, itemsPerPage).map(
              (pageNumber) => {
                const isInRange = Math.abs(pageNumber - currentPage) <= 2; // Adjust the range as needed
                return isInRange ? (
                  <button
                    key={pageNumber}
                    onClick={() => setCurrentPage(pageNumber)}
                    className={
                      pageNumber === currentPage
                        ? "selected mx-4 hover:scale-125 transition transform duration-500"
                        : "hover:scale-125 mx-4 transition transform duration-500"
                    }
                  >
                    {pageNumber}
                  </button>
                ) : null;
              }
            )}
            <Tooltip title="Next" position="top">
              <button
                className=" mx-6 rounded-full border p-2 hover:scale-110 transition transform duration-500"
                onClick={() => setCurrentPage(currentPage + 1)}
                disabled={
                  currentPage * itemsPerPage >= (data?.products.length || 0)
                }
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-6 h-6"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M8.25 4.5l7.5 7.5-7.5 7.5"
                  />
                </svg>
              </button>
            </Tooltip>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;

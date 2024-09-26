import React from "react";
import "./MainContent.css";
import ProductCard from "../ProductCard/ProductCard";

const productsData = [
  {
    name: "Rose Petal Bliss",
    description:
      "A gentle, rose-infused soap that nourishes and hydrates, leaving your skin soft and delicately scented.",
    image: "images/product-1.jpg",
  },
  {
    name: "Midnight Swirl",
    description:
      "A black and white soap with activated charcoal for a deep cleanse and shea butter for a silky, smooth feel.",
    image: "images/product-2.jpg",
  },
  {
    name: "Exotic Spice",
    description:
      "An aromatic set combining scents of cinnamon, clove, vanilla, and sandalwood. Perfect for those who enjoy warm, spicy fragrances.",
    image: "images/product-3.jpg",
  },
  {
    name: "Luxury Indulgence",
    description:
      "An opulent set with soaps made from shea butter, cocoa butter, silk protein, and argan oil. Perfect for a deeply moisturizing and pampering experience.",
    image: "images/product-4.jpg",
  },
  {
    name: "Woodland Harmony",
    description:
      "An earthy set with scents of cedarwood, pine, sandalwood, and patchouli. Ideal for those who enjoy the calming aroma of the forest.",
    image: "images/product-5.jpg",
  },
  {
    name: "Ocean Breeze",
    description:
      "A refreshing set featuring sea salt, ocean mist, algae, and kelp-infused soaps. Perfect for a beach-inspired cleanse that leaves your skin feeling revitalized.",
    image: "images/product-6.jpg",
  },
];

function Main() {
  return (
    <main className="main">
      <section className="section-products">
        <p className="section-products__intro">
          Discover our collection of handmade soaps, crafted with natural
          ingredients to nourish your skin
        </p>

        <ul className="products">
          {productsData.map((product) => (
            <ProductCard productObj={product} key={product.name} />
          ))}

          {/* <ProductCard
            name="Rose Petal Bliss"
            description="A gentle, rose-infused soap that nourishes and hydrates, leaving your skin soft and delicately scented."
            image="images/product-1.jpg"
          />

          <ProductCard
            name="Midnight Swirl"
            description="A black and white soap with activated charcoal for a deep cleanse and shea butter for a silky, smooth feel."
            image="images/product-2.jpg"
          />
          <ProductCard
            name="Exotic Spice"
            description="An aromatic set combining scents of cinnamon, clove, vanilla, and sandalwood. Perfect for those who enjoy warm, spicy fragrances."
            image="images/product-3.jpg"
          />
          <ProductCard
            name="Luxury Indulgence"
            description="An opulent set with soaps made from shea butter, cocoa butter, silk protein, and argan oil. Perfect for a deeply moisturizing and pampering experience."
            image="images/product-4.jpg"
          />
          <ProductCard
            name="Woodland Harmony"
            description="An earthy set with scents of cedarwood, pine, sandalwood, and patchouli. Ideal for those who enjoy the calming aroma of the forest."
            image="images/product-5.jpg"
          />
          <ProductCard
            name="Ocean Breeze"
            description="A refreshing set featuring sea salt, ocean mist, algae, and kelp-infused soaps. Perfect for a beach-inspired cleanse that leaves your skin feeling revitalized."
            image="images/product-6.jpg"
          /> */}
        </ul>
      </section>
    </main>
  );
}

export default Main;

import React from "react";
import "./Content.css";

const hobbiesData = [
  {
    name: "Opera Singing",
    photoName: "/images/hobbie-1.jpg",
  },
  {
    name: "Ice-skating",
    photoName: "/images/hobbie-2.jpg",
  },
  {
    name: "Swimming",
    photoName: "/images/hobbie-3.jpg",
  },
  {
    name: "Reading",
    photoName: "/images/hobbie-4.jpg",
  },
];

function Main() {
  return (
    <main className="main">
      <section className="section-hobbies">
        <p className="section-hobies__intro">
          Here are some of my favorite hobbies:
        </p>
        <ul className="hobbies">
          {hobbiesData.map((hobbie) => (
            <li className="hobbie" key={hobbie.name}>
              <img
                className="hobbie__img"
                src={hobbie.photoName}
                alt={hobbie.name}
              />
              <div className="hobbie__details">
                <h3 className="hobbie__name">{hobbie.name}</h3>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}

export default Main;

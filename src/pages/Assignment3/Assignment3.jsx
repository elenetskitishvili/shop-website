import React from "react";
import "./Assignment3.css";

const obj = {
  id: "10002",
  name: "Eco-Friendly Water Bottle",
  description: "Stay hydrated with our durable, eco-friendly water bottle.",
  price: 14.99,
  currency: "USD",
  imageURL: "https://example.com/images/product-10002.jpg",
};

const Assignment3 = () => {
  const list = Object.entries(obj).reduce((acc, [key, value], index) => {
    acc.push(
      <tr key={index}>
        <td>{key}</td>
        <td>{value}</td>
        <td>{index}</td>
      </tr>
    );
    return acc;
  }, []);

  return (
    <div className="assignment">
      <table>
        <thead>
          <tr>
            <th>key</th>
            <th>value</th>
            <th>position</th>
          </tr>
        </thead>
        <tbody>{list}</tbody>
      </table>
    </div>
  );
};

export default Assignment3;

import React from "react";
import "./Profile.css";

function Profile() {
  const user = {
    image: "/images/user.jpg",
    name: "Elene",
    surname: "Tskitishvili",
    email: "elene.tskitishvili504@gmail.com",
  };

  return (
    <main className="main main-profile">
      <section className="section-profile">
        <form className="profile__form">
          <div className="profile__image-container">
            <img className="profile__image" src={user.image} alt="User" />
          </div>
          <div className="profile__form-group">
            <label className="profile__label">Name</label>
            <input
              className="profile__input profile__input--name"
              type="text"
              value={user.name}
              readOnly
            />
          </div>
          <div className="profile__form-group">
            <label className="profile__label">Surname</label>
            <input
              className="profile__input profile__input--surname"
              type="text"
              value={user.surname}
              readOnly
            />
          </div>
          <div className="profile__form-group">
            <label className="profile__label">Email</label>
            <input
              className="profile__input profile__input--email"
              type="email"
              value={user.email}
              readOnly
            />
          </div>
        </form>
      </section>
    </main>
  );
}

export default Profile;

import "./Profile.css";
import { fetchUserDetails } from "../../../utils/fetchUserDetails";

export default async function Profile() {
  const user = await fetchUserDetails();
  return (
    <main className="main main-profile">
      <section className="section-profile">
        <form className="profile__form">
          <div className="profile__image-container">
            <img
              className="profile__image"
              src={user.image}
              alt={user.firstName}
            />
          </div>
          <div className="profile__form-group">
            <label className="profile__label">Name</label>
            <input
              className="profile__input profile__input--name"
              type="text"
              value={user.firstName}
              readOnly
            />
          </div>
          <div className="profile__form-group">
            <label className="profile__label">Surname</label>
            <input
              className="profile__input profile__input--surname"
              type="text"
              value={user.lastName}
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

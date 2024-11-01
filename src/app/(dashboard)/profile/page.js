import { getSession } from "@auth0/nextjs-auth0";
import "./Profile.css";

export default async function Profile() {
  const { user } = await getSession();
  return (
    user && (
      <main className="main main-profile">
        <section className="section-profile">
          <form className="profile__form">
            <div className="profile__image-container">
              <img
                className="profile__image"
                src={user.picture}
                alt={user.name}
              />
            </div>
            <div className="profile__form-group">
              <label className="profile__label">Name</label>
              <input
                className="profile__input profile__input--name"
                type="text"
                value={user.given_name}
                readOnly
              />
            </div>
            <div className="profile__form-group">
              <label className="profile__label">Surname</label>
              <input
                className="profile__input profile__input--surname"
                type="text"
                value={user.family_name}
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
    )
  );
}

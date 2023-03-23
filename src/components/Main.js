import { useContext } from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext.js";
import Header from "./Header.js";

const Main = ({
  cards,
  onEditAvatar,
  onEditProfile,
  onAddPlace,
  onCardClick,
  onBasketClick,
  onCardLike,
  onCardDeleteClick,
  handleSignOut
}) => {
  const currentUser = useContext(CurrentUserContext);
  const { name, about, avatar, email } = currentUser;

  return (
    <>
      <Header title="Выход" email={email} isOpen={true} onSingOut={handleSignOut} />

      <main>
        <section className="profile">
          <div className="profile__user">
            <button className="profile__edit-avatar" onClick={onEditAvatar}>
              <img
                className="profile__avatar"
                src={avatar}
                style={{ backgroundImage: `url(${avatar})` }}
                alt="аватар"
              />
            </button>

            <div className="profile__info">
              <div className="profile__name">
                <h1 className="profile__user-name">{name}</h1>
                <button
                  type="button"
                  className="profile__edit-button"
                  onClick={onEditProfile}
                ></button>
              </div>
              <p className="profile__user-info">{about}</p>
            </div>
          </div>

          <button
            type="button"
            className="profile__add-button"
            onClick={onAddPlace}
          ></button>
        </section>

        <section className="elements">
          {cards.map((card) => {
            return (
              <Card
                key={card._id}
                card={card}
                onCardClick={onCardClick}
                onBasketClick={onBasketClick}
                onCardLike={onCardLike}
                onCardDeleteClick={onCardDeleteClick}
              />
            );
          })}
        </section>
      </main>
    </>
  );
};

export default Main;

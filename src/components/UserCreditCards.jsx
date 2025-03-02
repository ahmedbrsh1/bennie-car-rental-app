import { Form, Link, useRouteLoaderData } from "react-router-dom";
import styles from "./UserCreditCards.module.css";
import { useState } from "react";
export default function UserCreditCards() {
  const userCreditCards = useRouteLoaderData("userDataLoader").credit_cards;
  const [cardSelected, setCardSelected] = useState(false);

  function selectCardHandler(value) {
    setCardSelected(value);
  }

  return (
    <>
      <Form method="POST">
        {(userCreditCards && !userCreditCards.length == 0 && (
          <ul className={styles.cards_wrapper}>
            {userCreditCards.map((creditCard) => (
              <li key={creditCard.card_id}>
                <input
                  type="radio"
                  name="card_id"
                  value={creditCard.card_id}
                  onFocus={() => selectCardHandler(true)}
                  onBlur={() => selectCardHandler(false)}
                />
                <span>
                  Card ending in {creditCard.card_number.toString().slice(-4)}
                </span>
                <span>{creditCard.cardholder_name}</span>
                <span>{creditCard.expiration_date}</span>
              </li>
            ))}
          </ul>
        )) || <p>You don't have any credit cards.</p>}

        <div className="button-container">
          {cardSelected && (
            <button className="danger-button">Delete Card</button>
          )}

          <Link to={"addcreditcard"} className="button primary-button">
            Add Card
          </Link>
        </div>
      </Form>
    </>
  );
}

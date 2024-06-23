import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import styles from "../styles/Main.module.css";

const FIELDS = {
  NAME: "name",
  ROOM: "room",
};

const Main = () => {
  const { NAME, ROOM } = FIELDS;

  const [values, setValues] = useState({ [NAME]: "", [ROOM]: "" });

  const handleChange = ({ target: { value, name } }) => {
    setValues({ ...values, [name]: value });
  };

  const handleClick = (e) => {
    const isDisabled = Object.values(values).some((v) => !v);

    if (isDisabled) e.preventDefault();
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <h1 className={styles.heading}>Войти в комнату</h1>

        <form className={styles.form}>
          <div className={styles.group}>
            <input
              type="text"
              name="name"
              value={values[NAME]}
              placeholder="Имя пользователья"
              className={styles.input}
              onChange={handleChange}
            />
          </div>
          <div className={styles.group}>
            <input
              type="text"
              name="room"
              placeholder="Комната"
              value={values[ROOM]}
              className={styles.input}
              onChange={handleChange}
            />
          </div>

          <Link
            className={styles.group}
            onClick={handleClick}
            to={`/chat?name=${values[NAME]}&room=${values[ROOM]}`}
          >
            <button type="submit" className={styles.button}>
              Войти
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Main;

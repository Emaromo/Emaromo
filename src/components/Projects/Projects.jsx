import React from "react";
import styles from "./Projects.module.css"

export default function Projects() {
  return (
    <div className={styles.projects}>
        <div className={styles.card}>
          <h1>Game loop</h1>
          {/* <img src="https://res.cloudinary.com/ddotagqdr/image/upload/v1663623557/happytails_xjluad.png"/> */}
          <p>Game loop is the result of teamwork and dedication. As a team, we created a digital game store where you can buy games for our final course project. It was developed with MERN (-Express-React-Node) technology.</p>
          <p><a href="https://github.com/Final-Proyect-PETS/Front-End" target="_blank">Repo Link</a></p>
          <p><a href="https://gamer-commerce.vercel.app/" target="_blank">Deployed app</a></p>
        </div>
        <div className={styles.card}>
          <h1>Pifood</h1>
          {/* <img src="https://res.cloudinary.com/ddotagqdr/image/upload/v1663623585/pokeapp_yhzwv3.png"/> */}
          <p>Pifood is a proyect made individually during the Henry bootcamp in 2022. It works by consuming an API that has all foods and their respective information. you can search, filter by different parameters, and create foods.</p>
          <p><a href="https://github.com/Emaromo/Pi.Foods" target="_blank">Repo Link</a></p>
          {/* <p><a href="https://pokeapi-jm95.vercel.app/" target="_blank">Deployed app</a></p> */}
        </div>
    </div>
  );
}
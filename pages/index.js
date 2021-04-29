import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.scss";
import Navbar from "../Utils/Nav/Navbar";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>The BLOG</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>The Blog</h1>
        <div className={styles.HeroCard}>
          <div className={styles.HeroCardImageContainer}>
            <Image
              className={styles.HeroCardImage}
              src="/unsplash.jpg"
              layout="fill"
              objectFit="cover"
            />
          </div>
          <div className={styles.HeroCardContent}>
            <small>March 05, 2021</small>
            <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>

            <h5>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati
              assumenda, porro, amet harum esse, illo reiciendis enim earum sunt
              cupiditate modi et iusto? Cum doloribus voluptatem dolores!
              Nesciunt, unde molestias.
            </h5>
          </div>
        </div>
      </div>
    </Fragment>
  );
}

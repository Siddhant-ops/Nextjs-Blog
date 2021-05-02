import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { Fragment } from "react";
import styles from "../styles/Home.module.scss";
import Navbar from "../Utils/Nav/Navbar";

export default function Home() {
  const some = () => {
    return (
      <div className={styles.Card}>
        <div className={styles.CardImageContainer}>
          <Image
            className={styles.CardImage}
            src="/static/Images/unsplash.jpg"
            layout="fill"
            objectFit="cover"
          />
        </div>
        <span>
          <small>March 05, 2021</small>
          <div className={styles.ArrowBox}>
            <i />
          </div>
        </span>
        <h3>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
          dignissimos,
        </h3>
      </div>
    );
    // const some = () => {
    //   return (
    //     <div className={styles.Card}>
    //       <div className={styles.CardImageContainer}>
    //         <Image
    //           className={styles.CardImage}
    //           src="/static/Images/unsplash.jpg"
    //           layout="fill"
    //           objectFit="cover"
    //         />
    //       </div>
    //       <small>March 05, 2021</small>
    //       <h2>
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eos
    //         dignissimos,
    //       </h2>
    //       <h5>
    //         Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit,
    //         corrupti odio. Esse quos nostrum aperiam eius quasi sed aut autem
    //         optio inventore mollitia, earum qui quo exercitationem iure, quis
    //         omnis?
    //       </h5>
    //     </div>
    //   );
  };

  return (
    <Fragment>
      <Head>
        <title>The BLOG</title>
      </Head>
      <Navbar />
      <div className={styles.container}>
        <h1 className={styles.title}>The Blog</h1>
        <h1>Featured Article</h1>
        <div className={styles.HeroCard}>
          <div className={styles.HeroCardImageContainer}>
            <Image
              className={styles.HeroCardImage}
              src="/static/Images/unsplash.jpg"
              layout="fill"
              objectFit="fill"
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
        <div className={styles.CardGrid}>
          {some()}
          {some()}
          {some()}
          {some()}
        </div>
      </div>
    </Fragment>
  );
}

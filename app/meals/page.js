import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getMelas } from "@/lib/meals";

const MealsPage = async () => {
  const meals = await getMelas();

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals,created
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself,It is easy and fun
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share your favorite Recipie</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={meals} />
      </main>
    </>
  );
};

export default MealsPage;

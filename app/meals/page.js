import { Suspense } from "react";

import Link from "next/link";
import MealsGrid from "@/components/meals/meals-grid";
import { getMelas } from "@/lib/meals";

import classes from "./page.module.css";

const Melas = async () => {
  const meals = await getMelas();

  return <MealsGrid meals={meals} />;
};

const MealsPage = async () => {
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
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Melas />
        </Suspense>
      </main>
    </>
  );
};

export default MealsPage;

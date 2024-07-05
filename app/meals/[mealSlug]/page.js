import Image from "next/image";

import clases from "./page.module.css";
import { getMeal } from "@/lib/meals";

const MealDetails = ({ params }) => {
  const meal = getMeal(params.mealSlug);

  meal.instructions = meal.instructions.replace(/\n/g, "<br/>");

  return (
    <>
      <header className={clases.header}>
        <div className={clases.image}>
          <Image src={meal.image} alt={meal.title} fill />
        </div>
        <div className={clases.headerText}>
          <h1>{meal.title}</h1>
          <p className={clases.creator}>
            by <a href={`mailito:${meal.creator_email}`}>{meal.creator}</a>
          </p>
          <p className={clases.summary}>{meal.summary}</p>
        </div>
      </header>
      <main>
        <p
          className={clases.instructions}
          dangerouslySetInnerHTML={{ __html: meal.instructions }}
        ></p>
      </main>
    </>
  );
};

export default MealDetails;

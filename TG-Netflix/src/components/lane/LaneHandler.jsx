import Lane from "./Lane";
import useWindowSize from "../../features/useWindowSize";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "../spinner-animation/Spinner.jsx";
import { useState } from "react";
import useCategoryFetch from "../../features/useCategoryFetch";

function LaneHandler({ categories, movie }) {
  const { ref, inView } = useInView({
    threshold: 1,
  });

  const [query, setQuery] = useState("");
  // const [categoryList, setCategoryList] = [
  //   "action",
  //   "adventure",
  //   "animation",
  //   "comedy",
  //   "crime",
  //   "documentary",
  //   "drama",
  //   "family",
  //   "fantasy",
  //   "history",
  //   "horror",
  //   "music",
  //   "mystery",
  //   "romance",
  //   "science_fiction",
  //   "tv_movie",
  //   "thriller",
  //   "war",
  //   "action",
  //   "adventure",
  //   "western",
  // ];



  // let categoryList = [
  //   "action",
  //   "adventure",
  //   "animation",
  //   "comedy",
  //   "crime",
  //   "documentary",
  //   "drama",
  //   "family",
  //   "fantasy",
  //   "history",
  //   "horror",
  //   "music",
  //   "mystery",
  //   "romance",
  //   "science_fiction",
  //   "tv_movie",
  //   "thriller",
  //   "war",
  //   "action",
  //   "adventure",
  //   "western",
  // ];

  // useEffect(() => {
// let threeCategories = categoryList.slice(0, 3)
// // De eerste 3 categorieën pakken
//     setQuery(threeCategories)

//     let test = categoryList.splice(0, 3)
//     setCategoryList(test)
//     console.log(categoryList)
  // }, [inView])

  console.log(query)

  const { loadedCategories } = useCategoryFetch(categories, inView);


  const size = useWindowSize();
  function getAmount() {
    if (size.width <= 600) {
      return 2;
    }
    if (size.width <= 1100 && size.width > 600) {
      return 4;
    }
    if (size.width > 1100) {
      return 5;
    }
  }

  function getSlices(movies) {
    let movieArray = [];
    for (let i in movies) {
      movieArray.push(movies[i]);
    }
    let slices = [];
    let amount = getAmount();
    let number = Math.round(movieArray.length / amount);
    for (let i = 0; i < number; i++) {
      slices.push(movieArray.slice(i * amount, amount + i * amount));
    }
    return slices;
  }

  // useEffect(() => {
  //   if (inView) {
  //     console.log("test");
  //     // Fetch functie
  //     // console.log([...categories, "Hier de nieuwe gefetchte categorieen"])
  //     //  useCategoryFetch(categories)
  //     // return setCategories([...loadedCategories, test]);
  //   }
  // }, [inView]);

  console.log(inView);

  return (
    <div className="laneContainer">
      {loadedCategories.map((item, index) => {
        let someSlices = getSlices(item.movies);

        return (
          <div className="hidden" key={index}>
            {someSlices.length > 0 && (
              <Lane
                categoryTitle={item.name}
                slices={getSlices(item.movies)}
                itemsPerLane={getAmount()}
              ></Lane>
            )}
          </div>
        );
      })}
      <div style={{ width: "30px", margin: "0 auto" }} ref={ref}>
        <Spinner />
      </div>
    </div>
  );
}
export default LaneHandler;

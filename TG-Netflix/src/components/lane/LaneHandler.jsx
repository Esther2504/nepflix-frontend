import Lane from "./Lane";
import useWindowSize from "../../features/useWindowSize";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import Spinner from "../spinner-animation/Spinner.jsx";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getBrowse } from "../../reducers/fetchReducer";

function LaneHandler() {
  const { ref, inView } = useInView({
    threshold: 1,
  });
  const [index, setIndex] = useState(0);

  const dispatch = useDispatch();

  const categoryList = [
    "adventure",
    "animation",
    "comedy",
    "crime",
    "documentary",
    "drama",
    "family",
    "fantasy",
    "history",
    "horror",
    "music",
    "mystery",
    "romance",
    "science fiction",
    "tv movie",
    "thriller",
    "war",
    "western",
    "latest",
  ];

  let loadedCategories = useSelector((state) => state.netflix.browse[0]);

  // Removes duplicates based on category name
  function getUniqueCategories(array, key) {
    return [...new Map(array.map((item) => [item[key], item])).values()];
  }
  loadedCategories = getUniqueCategories(loadedCategories, "name");

  useEffect(() => {
    if (inView) {
      let categorySelection = categoryList.slice(index, index + 4);
      categorySelection = categorySelection.toString();

      setIndex(index + 4);

      const categories = categorySelection;

      if (loadedCategories.length < 21) {
        dispatch(getBrowse({ categories }));
      }
    }
  }, [inView]);

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

  return (
    <div className="laneContainer">
      {loadedCategories?.map((item, index) => {
        let someSlices = getSlices(item?.movies);
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

      {loadedCategories?.length < 21 ? (
          <div style={{ width: "30px", margin: "0 auto" }} ref={ref}>
          <Spinner />
        </div>
      ) : null}
    </div>
  );
}
export default LaneHandler;

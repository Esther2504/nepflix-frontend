import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBrowse } from "../reducers/fetchReducer";

export default function useCategoryFetch(categories, inView) {
  const [loadedCategories, setCategories] = useState(categories);
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  let categoryList = [
    "action",
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
    "science_fiction",
    "tv_movie",
    "thriller",
    "war",
    "action",
    "adventure",
    "western",
  ];

  let test = {
    page: 1,
    name: "Crime",
    movies: [
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
    ],
  };

  // console.log(categories);
  // console.log(loadedCategories);

  useEffect(() => {
    let categorySelection = categoryList.slice(index, index + 3);
    categorySelection = categorySelection.toString()
    setIndex(index + 3);
    // Fetch categorySelection
    const categories = categorySelection

    dispatch(getBrowse({ categories }));

    // console.log(categorySelection);
    // setCategories([...loadedCategories, categories]);
  }, [inView]);

  // console.log(categoryList)

  return { loadedCategories };
}

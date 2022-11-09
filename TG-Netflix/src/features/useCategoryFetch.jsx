import React from "react";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getBrowse } from "../reducers/fetchReducer";
import { scrollReducer } from "../reducers/fetchReducer";


export const categoryList = [
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
  "science fiction",
  "tv movie",
  "thriller",
  "war",
  "action",
  "adventure",
  "western",
];

export default function useCategoryFetch(categories, inView, index, setIndex) {
  const [loadedCategories, setCategories] = useState(categories);
 
  const dispatch = useDispatch();

  const [query, setQuery] = useState("");
  

  let test = {
    page: 1,
    name: "Crime",
    movies: [
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
      {
        backdrop_path: "https://image.tmdb.org/t/p/original/cOF0InT1qQVUeNjqxjF7gtEtL5L.jpg",
        id: 985897,
        title: "Movie",
      },
    ],
  };

  useEffect(() => {
    let categorySelection = categoryList.slice(index, index + 4);
    categorySelection = categorySelection.toString()
    setIndex(index + 4);
    // console.log(index)
    const categories = categorySelection

    if (index <= categoryList.length - 1) {
    dispatch(getBrowse({ categories }));
    // dispatch(scrollReducer( dispatch(getBrowse({ categories })) ))

    // console.log(categorySelection);
    setCategories([...loadedCategories, test]);
    }
  }, [inView]);

  // console.log(categoryList)

  return { loadedCategories };
}

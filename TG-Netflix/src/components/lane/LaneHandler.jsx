import Lane from "./Lane";
import useWindowSize from "../../features/useWindowSize";

const genresPlaceholder = [
  {
    id: 18,
    name: "Drama",
  },
  {
    id: 10749,
    name: "Romance",
  },
  {
    id: 35,
    name: "Comedy",
  },
];

const movies = [
  //wordt uiteindelijk doorgegeven als prop
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
    video: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
    video: "https://www.youtube.com/watch?v=dd03qev59Jo",
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
    video: "https://www.youtube.com/watch?v=PKTes-j1MUc",
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
    video: "https://www.youtube.com/watch?v=dC3UFn5MeCg",
  },
  {
    backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
    title: "The Cuckoo",
    id: 554,
    video: "https://www.youtube.com/watch?v=dow9SRj9A0g",
  },
  {
    backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
    title: "Basquiat",
    id: 549,
    video: "https://www.youtube.com/watch?v=GsWZyvtX5tU",
  },
  {
    backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
    title: "Rashomon",
    id: 548,
    video: "https://www.youtube.com/watch?v=Zqoyl2p8_lw",
  },
  {
    backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
    title: "The Horse Whisperer",
    id: 547,
    video: "https://www.youtube.com/watch?v=_nCowPQ2aa4",
  },
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
    video: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
    video: "https://www.youtube.com/watch?v=dd03qev59Jo",
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
    video: "https://www.youtube.com/watch?v=PKTes-j1MUc",
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
    video: "https://www.youtube.com/watch?v=dC3UFn5MeCg",
  },
  {
    backdrop_path: "/1qwXItFKqvKYyW1CwbYhxyUC8Pj.jpg",
    title: "The Cuckoo",
    id: 554,
    video: "https://www.youtube.com/watch?v=dow9SRj9A0g",
  },
  {
    backdrop_path: "/1fJSyFhvxBjyLZsBnYs4641YXu1.jpg",
    title: "Basquiat",
    id: 549,
    video: "https://www.youtube.com/watch?v=GsWZyvtX5tU",
  },
  {
    backdrop_path: "/zyO6j74DKMWfp5snWg6Hwo0T3Mz.jpg",
    title: "Rashomon",
    id: 548,
    video: "https://www.youtube.com/watch?v=Zqoyl2p8_lw",
  },
  {
    backdrop_path: "/ww9pokP6M6gp2Iu0o3sT5B7eN66.jpg",
    title: "The Horse Whisperer",
    id: 547,
    video: "https://www.youtube.com/watch?v=_nCowPQ2aa4",
  },
  {
    backdrop_path: "/rr7E0NoGKxvbkb89eR1GwfoYjpA.jpg",
    title: "Fight Club",
    id: 550,
    video: "https://www.youtube.com/watch?v=qtRKdVHc-cE",
  },
  {
    backdrop_path: "/v1QEIuBM1vvpvfqalahhIyXY0Cm.jpg",
    title: "The Poseidon Adventure",
    id: 551,
    video: "https://www.youtube.com/watch?v=dd03qev59Jo",
  },
  {
    backdrop_path: "/k4JIHyAXaGHwAwT7y5Skd17f0Wl.jpg",
    title: "Pane e tulipani",
    id: 552,
    video: "https://www.youtube.com/watch?v=PKTes-j1MUc",
  },
  {
    backdrop_path: "/r3xsFBD1VTUusk393bBc7SsDUJe.jpg",
    title: "Dogville",
    id: 553,
    video: "https://www.youtube.com/watch?v=dC3UFn5MeCg",
  },
];

function LaneHandler() {
  const size = useWindowSize();
  function getAmount() {
    if (size.width <= 600) {
      return 2;
    }
    // if (size.width <= 800 && size.width > 500) {
    //   return 3;
    // }
    if (size.width <= 1100 && size.width > 600) {
      return 4;
    }
    if (size.width > 1100) {
      return 5;
    }
  }

  function getSlices() {
    let slices = [];
    let amount = getAmount();
    let number = Math.round(movies.length / amount);
    for (let i = 0; i < number; i++) {
      slices.push(movies.slice(i * amount, amount + i * amount));
    }
    return slices;
  }

  let someSlices = getSlices();

  return (
    <div>
      {genresPlaceholder.map((item, index) => {
        return (
          <>
            {someSlices.length > 0 && (
              <Lane
                key={index}
                categoryTitle={item.name}
                slices={getSlices()}
                itemsPerLane={getAmount()}
              ></Lane>
            )}
          </>
        );
      })}
    </div>
  );
}
export default LaneHandler;

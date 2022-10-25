import Lane from "./Lane";
import useWindowSize from "../../features/useWindowSize";

function LaneHandler({categories}) {

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

  function getSlices(movies) {
    let movieArray = []
    for (let i in movies) {
      movieArray.push(movies[i])
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
    <>
      {categories.map((item, index) => {
        let someSlices = getSlices(item.movies)

        return (
          <div key={index}>
            {someSlices.length > 0 && (
              <Lane
                categoryTitle={item.name}
                slices={someSlices}
                itemsPerLane={getAmount()}
              ></Lane>
            )}
          </div>
        );
      })}
    </>
  );
}
export default LaneHandler;

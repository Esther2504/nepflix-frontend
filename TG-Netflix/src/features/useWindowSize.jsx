import { useState, useEffect } from "react";

function useWindowSize(props) {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    function handleResize() {
      props.setIsHovering(false)
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);
    // screen.orientation.addEventListener("change", handleResize);

    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
      // screen.orientation.removeEventListener("change", handleResize);
    };
  }, []);

  return windowSize;
}

export default useWindowSize;

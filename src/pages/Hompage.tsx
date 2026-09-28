import { useEffect } from "react";
import { useData } from "../context/DataContext.ts";

const Homepage = () => {
  const { paintings, styles } = useData();

  useEffect(() => {
    console.log(paintings, styles);
  }, [paintings]);

  return (
    <section>
      <h1>Momi's Art</h1>
    </section>
  );
};

export default Homepage;

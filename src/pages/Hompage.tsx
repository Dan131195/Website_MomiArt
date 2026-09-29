import { useEffect } from "react";
import { useData } from "../context/DataContext.ts";
import { urlFor } from "../api/image.ts";

const Homepage = () => {
  const { paintings, styles } = useData();

  useEffect(() => {
    console.log(paintings);
    console.log(styles);
  }, [paintings, styles]);

  return (
    <section>
      <h1>Momi's Art</h1>
      {paintings &&
        paintings.map((p) => {
          return (
            <img
              key={p._id}
              src={urlFor(p.immagine).url()}
              alt={p.titolo}
              width={150}
            />
          );
        })}
    </section>
  );
};

export default Homepage;

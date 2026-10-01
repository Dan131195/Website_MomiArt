import { urlFor } from "../api/image";
import { useData } from "../context/DataContext";

const Opere = () => {
  const { paintings } = useData();

  return (
    <div>
      <h2>OPERE</h2>
      <div>
        {paintings.map((p) => {
          return (
            <img
              key={p._id}
              src={urlFor(p.immagine).url()}
              alt={p.titolo}
              className="rounded-5"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Opere;

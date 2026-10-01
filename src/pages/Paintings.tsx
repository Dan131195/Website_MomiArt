import { urlFor } from "../api/image";
import { useData } from "../context/DataContext";

const Opere = () => {
  const { paintings } = useData();

  return (
    <div>
      <h2 className="mb-4">OPERE</h2>
      <div id="paintingsListContainer">
        {paintings.map((p) => {
          return (
            <div key={p._id} className="paintingCard my-5">
              <img
                src={urlFor(p.immagine).url()}
                alt={p.titolo}
                className="rounded-2"
              />
              <p className="fw-bold m-0">{p.titolo}</p>
              <p className="m-0 fs-6">{p.stile}</p>
              <hr className="m-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Opere;

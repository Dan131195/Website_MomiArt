import { useEffect, useState } from "react";
import createClient from "../api/client.ts";
import type { PaintingInterface } from "../types";

const Homepage = () => {
  const [painting, setPainting] = useState<PaintingInterface[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data =
          await createClient.fetch<PaintingInterface[]>(`*[_type == "quadro"]`);
        setPainting(data);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log(painting);
  }, [painting]);

  return (
    <section>
      <h1>Momi's Art</h1>
    </section>
  );
};

export default Homepage;

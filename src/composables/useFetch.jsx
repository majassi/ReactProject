import { useState, useEffect } from "react";
import { projectFirestore } from "../Firebase/config";

const useFetch = (collection) => {
  const [data, setData] = useState(null);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    let collectionRef = projectFirestore.collection(collection);

    collectionRef.onSnapshot(
      (snap) => {
        let results = [];
        snap.docs.forEach((doc) => {
          // must wait for the server to create the timestamp & send it back
          results.push({ ...doc.data(), id: doc.id });
        });

        // update values
        setIsPending(false);
        setData(results);
        setError(null);
      },
      (err) => {
        console.log(err.message);
        setData(null);
        setError("could not fetch the data");
      }
    );
  }, [collection]);

  return { data, isPending, error };
};

export default useFetch;

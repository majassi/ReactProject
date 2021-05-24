import { useState } from "react";
import { projectFirestore } from "../Firebase/config";

const useDocument = (collection, id) => {
  const [error, setError] = useState(null);

  const [loading, setLoading] = useState(null);

  const deleteDoc = () => {
    let docRef = projectFirestore.collection(collection).doc(id);
    try {
      const res = docRef.delete();
      return res;
    } catch (err) {
      setError(err.message);
    }
  };

  const update = async (id, newValues) => {
    console.log(id, newValues);
    setLoading(true);
    try {
      projectFirestore
        .collection(collection)
        .doc(id)
        .update({ name: newValues });
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const create = () => {
    console.log("Hello");
  };

  return { error, create, deleteDoc, update, loading };
};

export default useDocument;

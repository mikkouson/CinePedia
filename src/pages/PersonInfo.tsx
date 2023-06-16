import React, { useEffect, useState } from "react";
import { fetchPerson } from "../api/api";
import { useParams } from "react-router-dom";

const PersonInfo = () => {
  const [person, setPerson] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      setPerson(await fetchPerson(Number(id)));
    };
    fetchData();
  }, [id]);

  console.log(person);

  return (
    <>
      <div className="section">
        <div className="grid grid-cols-4 grid-rows-5  gap-4">
          <div className="div bg-red-500">1</div>
          <div className="div bg-yellow-500">2</div>
        </div>
      </div>
    </>
  );
};

export default PersonInfo;

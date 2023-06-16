import { useEffect, useState } from "react";
import { fetchPeople } from "../../api/api";
import PeopleList from "./PeopleList";

const TopPeople = () => {
  const [person, setPeople] = useState();

  useEffect(() => {
    const data = async () => {
      setPeople(await fetchPeople());
    };
    data();
  }, []);
  return (
    <>
      {person && (
        <section className="max-w-screen-2xl mx-auto px-5  1lg:px-10  2xl:px-0">
          <h2 className="text-white text-3xl font-semibold my-6">
            Popular People
          </h2>
          <PeopleList people={person} />
        </section>
      )}
    </>
  );
};

export default TopPeople;

import { useEffect, useState } from "react";
import { fetchPeople } from "../../api/api";
import PeopleList from "./PeopleList";

const TopPeople = () => {
  const [people, setPeople] = useState();

  useEffect(() => {
    const data = async () => {
      setPeople(await fetchPeople());
    };
    data();
  }, []);
  return (
    <>
      {people && (
        <section className="max-w-screen-2xl mx-auto">
          <h2 className="text-white text-3xl font-semibold my-6">
            Popular People
          </h2>
          <PeopleList people={people} />
        </section>
      )}
    </>
  );
};

export default TopPeople;

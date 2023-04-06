import React, { useState } from "react";
interface Props {
  handleSearch: (url: string) => Promise<void>;
}
const useSearch = ({ handleSearch }: Props) => {
  const [query, setSearchMovie] = useState("");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (query && query !== "") {
      await handleSearch(
        "https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=" +
          query
      );
    }
  }
  return query;
};

export default useSearch;

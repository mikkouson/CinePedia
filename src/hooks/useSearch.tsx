import React, { useState } from "react";
import { fetchsearch } from "../api/api";
interface Props {
  handleSearch: (url: string) => Promise<void>;
}
const useSearch = ({ handleSearch }: Props) => {
  const [query, setSearchMovie] = useState("");

  async function handleSubmit(e: { preventDefault: () => void }) {
    e.preventDefault();
    if (query && query !== "") {
      await handleSearch(fetchsearch + query);
    }
  }
  return query;
};

export default useSearch;

"use client";

import { useState, useEffect } from "react";

import PromptCard from "./PromptCard";

const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className="mt-16 prompt_layout">
      {data.map((post) => (
        <PromptCard
          key={post._id}
          post={post}
          handleTagClick={handleTagClick}
        />
      ))}
    </div>
  );
};

const Feed = () => {
  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("/api/prompt");
    const data = await res.json();

    setPosts(data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setSearch(searchText);
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchText]);

  useEffect(() => {
    // call api here
    const filteredPosts = async () => {
      const res = await fetch(`/api/search/${search}`);
      const data = await res.json();
      console.log("filteredPosts", data);

      setPosts(data);
    };
    if (!!search) filteredPosts();
    else fetchPosts();
  }, [search]);

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  return (
    <section className="feed">
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder="Search for a tag or a username"
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />
      </form>

      <PromptCardList data={posts} handleTagClick={() => {}} />
    </section>
  );
};

export default Feed;

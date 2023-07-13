"use client";

import { useState, useEffect } from "react";
import { useSearchParams } from "next/navigation";

import Profile from "@components/Profile";

const UserProfile = ({ params }) => {
  const searchParams = useSearchParams();
  const username = searchParams.get("name");
  const [userPosts, setUserPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${params?.id}/posts`);
      const data = await response.json();

      setUserPosts(data);
    };

    if (params?.id) fetchPosts();
  }, [params?.id]);

  return (
    <Profile
      name={`${username.toUpperCase().slice(0, 1) + username.slice(1)}'s`}
      desc={`Welcome to ${username}'s profile page. Here you can see all the prompts created by ${username}.`}
      data={userPosts}
    />
  );
};

export default UserProfile;

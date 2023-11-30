import React from "react";
import { ToastContainer } from "react-toastify";
import Header from "../../app/Layout/Header";
import ProfileCard from "../../app/(info)/ProfileCard";

export default function ProfilePage() {
  return (
    <>
      <Header />
      <ProfileCard />
      <ToastContainer />
    </>
  );
}

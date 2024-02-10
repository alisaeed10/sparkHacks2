"use client";
import React from "react";
import NavBar from "../components/NavBar";
import PageOne from "../components/PageOne";
import PageTwo from "../components/PageTwo";
import PageThree from "../components/PageThree";
import PageFour from "../components/PageFour";

export default function Home() {
  return (
    <div>
        <NavBar />
        <PageOne />
        <PageTwo />
        <PageThree />
        <PageFour />
    </div>
  );
}

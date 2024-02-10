"use client"
import Image from "next/image";
import React from 'react';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import PageOne from '../components/PageOne';
import PageTwo from '../components/PageTwo';
import PageThree from '../components/PageThree';
import PageFour from '../components/PageFour';


export default function Home() {
  return (
    <main>
      <NavBar /> 
      <PageOne />
      <PageTwo />
      <PageThree />
      <PageFour />
    </main>
  );
}
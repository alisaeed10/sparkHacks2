import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { FaArrowCircleDown } from "react-icons/fa";

export const Header = styled.h1`
  text-align: center;
  left: 50%;
  color: green;
`;

export const Content = styled.div`
  overflow-y: scroll;
  height: 2500px;
`;

export const Button = styled.div`
  width: 100%;
  left: 50%;
  height: 20px;
  font-size: 3rem;
  z-index: 1;
  cursor: pointer;
  color: white;
`;

const ScrollButton = () => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const toggleVisible = () => {
      const scrolled = document.documentElement.scrollTop;
      setVisible(true);
    };

    if (typeof window !== 'undefined') {
      window.addEventListener("scroll", toggleVisible);

      return () => window.removeEventListener("scroll", toggleVisible);
    }
  }, []);

  const scrollToBottom = () => {
    const viewportHeight = window.innerHeight;
    const currentScrollPosition = window.scrollY;
    const nextScrollPosition = currentScrollPosition + viewportHeight;
    window.scrollTo({
      top: nextScrollPosition,
      behavior: "auto",
    });
  };

  return (
    <Button>
      <FaArrowCircleDown
        onClick={scrollToBottom}
        style={{ display: visible ? "inline" : "none" }}
      />
    </Button>
  );
};

export default ScrollButton;

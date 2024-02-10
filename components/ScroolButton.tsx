// import styled from "styled-components";
// import React, { useState } from "react";
// import { FaArrowCircleDown } from "react-icons/fa";

// export const Header = styled.h1`
//   text-align: center;
//   left: 50%;
//   color: green;
// `;

// export const Content = styled.div`
//   overflowy: scroll;
//   height: 2500px;
// `;

// export const Button = styled.div`
//   width: 100%;
//   left: 50%;
//   height: 20px;
//   font-size: 3rem;
//   z-index: 1;
//   cursor: pointer;
//   color: black;
// `;

// const ScrollButton = () => {
//   const [visible, setVisible] = useState(true);

//   const toggleVisible = () => {
//     const scrolled = document.documentElement.scrollTop;
//     setVisible(true);
//   };

//   const scrollToBottom = () => {
//     // Get the height of the viewport
//     const viewportHeight = window.innerHeight;
//     // Get the current scroll position
//     const currentScrollPosition = window.scrollY;
//     // Calculate the scroll position for the next page
//     const nextScrollPosition = currentScrollPosition + viewportHeight;
//     window.scrollTo({
//       top: nextScrollPosition,
//       behavior: "auto",
//       /* you can also use 'auto' behaviour 
// 			in place of 'smooth' */
//     });
//   };

//   window.addEventListener("scroll", toggleVisible);

//   return (
//     <Button>
//       <FaArrowCircleDown
//         onClick={scrollToBottom}
//         style={{ display: visible ? "inline" : "none" }}
//       />
//     </Button>
//   );
// };

// export default ScrollButton;
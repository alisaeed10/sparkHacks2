/* eslint-disable react/no-unescaped-entities */
"use client";
import React from "react";
import styled from "styled-components";
import Link from 'next/link'; // Import Link from Next.js


const PageFiveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url('../public/stars.webp');
`;

const PageFiveContent = styled.div`
  width: 50vw;
  margin-bottom: 20vh;
`;

const PageFiveStyle = styled.div`
  font-size: 9rem;
  color: white;
  text-align: center;
  font-weight: 200;
  margin-top: 15vh;
`;

const SmallText = styled.p`
  font-size: 1rem;
  color: white;
  text-align: center;
  font-weight: 300;
  margin-top: 15vh;

`;

const ButtonContainer = styled.div`
  text-align: center;
  margin-top: 20px; /* Adjust as needed */
`;

const Button = styled.button`
  background-color: rgb(255, 170, 0);
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  outline: 0;
  text-transform: uppercase;
  cursor: pointer;
  box-shadow: 0px 2px 2px lightgray;
  transition: ease background-color 250ms;
  border: none;
  &:hover {
    background-color: white;
    color: black;
  }
  margin-top: 4vh;

`;

export interface IPageFiveProps {}
const PageFive: React.FunctionComponent<IPageFiveProps> = () => {
  // const router = useRouter(); // Initialize useNavigate
  
  // // Function to handle click
  // const handleClick = () => {
  //   router.push('/GymTechnique'); // Navigate to target page on click
  // };
  return (
    <div className="conainter-background">
      <PageFiveContainer id="Technique">
        <PageFiveContent>
          <PageFiveStyle>Technique</PageFiveStyle>
          
          <SmallText>
            Refine Your Gym Routine with Proven Techniques! Explore our
            Technique Section for a treasure trove of workout wisdom sourced
            directly from top fitness influencers on YouTube. Tailor your
            training regimen by selecting your desired workout type, whether
            it&apos;s mastering squats, perfecting deadlifts, or honing your bench
            press technique. With our &apos;Learn More&apos; option, dive deeper into each
            technique&apos;s intricacies, empowering you to elevate your fitness
            game. Get ready to unleash your full potential and achieve your
            fitness aspirations with precision and confidence!
          </SmallText>
          <ButtonContainer>
          <Link href="/GymTechnique" passHref>
            <Button as="a">Click Here For More</Button>
          </Link>
        </ButtonContainer>
        </PageFiveContent>
      </PageFiveContainer>
    </div>
  );
};

export default PageFive;
import React from "react";
import { stackList } from "../../data/ProjectData";
import {
  Image,
  Technologies,
  Tech,
  TechImg,
  TechName,
  ContactWrapper,
} from "./AboutElements";
import ScrollAnimation from "react-animate-on-scroll";
function About() {
  return (
    <ContactWrapper id="about">
      <div className="Container">
        <div className="SectionTitle">About Me</div>
        <div className="BigCard">
          <ScrollAnimation animateIn="fadeInLeft">
            <Image src="/student-11.svg" alt="man-svgrepo" />
          </ScrollAnimation>
          <div className="AboutBio">
            <ScrollAnimation animateIn="fadeInLeft">
              Hello! My name is <strong>Mohit Upadhyay</strong>. I'm originally
              from Morena, Madhya Pradesh. I have been living in Chennai for the
              past two years, where I am currently pursuing my B.Tech in
              Computer Science and Engineering from SRM Institute of Science and
              Technology.
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              During my two years of college life at SRMIST, I've had the
              privilege of participating in numerous hackathons and engaging in
              exciting projects. These experiences allowed me to explore new
              technologies, enhance my technical skills, and collaborate with
              friends, <strong>turning ideas into working models.</strong> While
              delving into tech innovations, I've also made the most of my
              college journey, enjoying the balance of learning and fun, and
              creating unforgettable memories with my peers. This combination of
              creativity, teamwork, and personal growth has made my time in
              college truly rewarding.
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              I am eager to continue exploring exciting projects in the future,
              with a particular interest in web development and cross-platform
              mobile development.
            </ScrollAnimation>
            <br />
            <ScrollAnimation animateIn="fadeInLeft">
              Throughout my first year of academics, I have consistently
              demonstrated a strong commitment to excellence. I scored a{" "}
              <strong>9.27 SGPA in the first semester</strong> and improved to a{" "}
              <strong>9.76 SGPA in the second</strong>, achieving an impressive
              cumulative CGPA of <strong>9.515.</strong>
              <div className="tagline2">
                I have become confident using the following technologies:
              </div>
            </ScrollAnimation>

            <Technologies>
              {stackList.map((stack, index) => (
                <ScrollAnimation animateIn="fadeInLeft" key={index}>
                  <Tech key={index} className="tech">
                    <TechImg src={stack.img} alt={stack.name} />
                    <TechName>{stack.name}</TechName>
                  </Tech>
                </ScrollAnimation>
              ))}
            </Technologies>
          </div>
        </div>
      </div>
    </ContactWrapper>
  );
}

export default About;

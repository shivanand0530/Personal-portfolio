import { Project, Skill, QualificationItem, SocialLink } from '../types';
import profileImage from "../assets/head.png";
import cpp from "../assets/c++-logo.webp";
import javascript from "../assets/js-logo.webp";
import typescript from "../assets/typescript-logo.webp";
import html from "../assets/html-logo.webp";
import css from "../assets/css-logo.webp";
import mysql from "../assets/mysql-logo.webp";
import react from "../assets/React-Logo.webp";
import node from "../assets/node-js-logo.webp";
import mongoDB from "../assets/mongodb-logo.webp";
import firebase from "../assets/firebase-logo.webp";
import git from "../assets/git-logo.webp";
import expoGo from "../assets/expo-go-logo.webp";
import sqldb from '../assets/sql-db-logo.webp';
import swift from '../assets/Swift-logo.webp';
import xcode from '../assets/xcode-logo.webp';
import AndroidStudio from '../assets/android studio.webp';
import java from '../assets/java-logo.webp';
import redux from '../assets/redux-logo.webp';
import express from '../assets/express-js-logo.webp';
import sourcetree from '../assets/sourcetree-logo.webp';
import RNproject from '../assets/password-manager-theme-.webp';
import chessAPp from '../assets/chess-app-img.png';
import LeetBuddyAI from '../assets/leetbuddy-project.webp';
import weather from '../assets/rn-weather.png';
import revGui from '../assets/rev-Gui.webp';

export const personalInfo = {
  name: "Shivananda Bharathi K",
  title: "Mobile Application developer, Frontend Developer, Cyber Security Enthusiast",
  bio: "Mobile Application developer, Frontend Developer, Cyber Security Enthusiast",
  location: "Bengaluru, India",
  email: "shivananda0645@gmail.com",
  phone: "+91-9606475664",
  about: "Creative and detail-oriented Frontend Developer skilled in building seamless and interactive user interfaces. Experienced Mobile Application Developer with expertise in React Native for cross-platform solutions. Passionate about cybersecurity, always integrating secure coding practices and staying current with emerging security threats. Driven to deliver high-quality, user-focused digital products that are both beautiful and robust.",
  profileImage: profileImage
};

export const socialLinks: SocialLink[] = [
  {
    icon: "ri-linkedin-box-line",
    url: "https://www.linkedin.com/in/shivananda-k-b074812bb",
    label: "LinkedIn"
  },
  {
    icon: "ri-github-line", 
    url: "https://github.com/shivanand0530",
    label: "GitHub"
  },
  {
    icon: "ri-mail-line",
    url: "", 
    label: "Mail"
  }
];

export const developmentSkills: Skill[] = [
  { name: "C++", image: cpp, level: "" },
  { name: "Javascript", image: javascript, level: "" },
  { name: "Typescript", image: typescript, level: "" },
  { name: "HTML", image : html, level: ""},
  { name: "CSS", image : css, level: ""},
  { name: "MySQL", image : mysql, level: ""},
  { name: 'Swift', image : swift, level: ""},
  { name: 'java', image : java, level:""}
  // { name: "React", image : react, level: ""},
  // { name: "React Native", image : reactNative, level: ""},
  // { name: "Node.js", image : node, level: ""},
  // { name: "Express", image : express, level: ""},
  // { name: "MongoDB", image : mongoDB, level: ""},
  ];

export const Framework: Skill[] = [
  { name : "React,React-Native", image : react, level: ""},

  { name : "Redux", image : redux, level: ""},
  { name : "Node.js", image : node, level: ""},
  { name : "Express", image : express, level: ""},
  { name : "MongoDB", image : mongoDB, level: ""},
  { name : "Firebase", image : firebase, level: ""},
  { name : "Git", image : git, level: ""},
  { name : "Expo Go", image : expoGo, level: ""},
  { name: "SQL", image : sqldb, level: ""},
  { name : "Xcode", image : xcode, level: ""},
  { name : "Android Studio", image : AndroidStudio, level: ""},
  { name : "SouceTree", image : sourcetree, level: ""},
  // { name : "VS Code", image : vsCode, level: ""},

];

export const education: QualificationItem[] = [
  {
    name: "B.Tech. (Computer Science & Engineering ) [3.2 GPA]",
    institution: "Alliance University, Bengaluru",
    year: "2021 - 2025"
  },
  {
    name: "Pre University (PUC) [98.5%]",
    institution: "Bellary Independent PU College, Bellary",
    year: "2019 - 2021"
  },
  {
    name: "Senior Secondary [96.32%]",
    institution: "Wisdom land High School, Bellary",
    year: "2018 - 2019"
  }
];

export const experience: QualificationItem[] = [
  {
    name: "Mobile Application Developer Intern",
    institution: "Anugraha Exceed Pvt Ltd",
    year: "Oct 2024 - Mar 2025"
  },
  {
    name: "IOS App Development Internship",
    institution: "Alliance University - Bangalore", 
    year: "June 2024 - July 2024"
  }
];

export const projects: Project[] = [
  {
    id: 1,
    title: "PassWord Manager-RN",
    subtitle: "React Native App",
    image: RNproject,
    demoUrl: "https://github.com/shivanand0530/Password-Manager-RN"
  },
  {
    id: 2,
    title: "LeetBuddy-AI",
    subtitle: "AI Project",
    image: LeetBuddyAI,
    demoUrl: "https://github.com/shivanand0530/Leet-Buddy-AI"
  },
  {
    id: 3,
    title: "Chess-Master-AI",
    subtitle: "AI Project",
    image: chessAPp,
    demoUrl: "https://github.com/shivanand0530/Chess-Master-Ai"
  },
  {
    id: 4,
    title: "Reverse Engineering GUI",
    subtitle: "Cyber Security Project",
    image: revGui,
    demoUrl: "https://github.com/shivanand0530/Reverse-Engineering-GUI"
  },
  {
    id: 5,
    title: "Weather App-RN",
    subtitle: "React Native App",
    image: weather,
    demoUrl: "https://github.com/shivanand0530/React-native-Weather-APP"
  }
];
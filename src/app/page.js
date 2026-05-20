import Image from "next/image";
import styles from "./page.module.css";
import Intro from "./components/Hero-section/Intro";
import Brands from "./components/Hero-section/Brands";
import NEWARRIVALS from "./components/NewAeeivals-section/NEWARRIVALS";
import Bannersection from "./components/Bannersection";
import Favouritesection from "./components/Favouritesection";
import Download from "./components/Voucher-section/Download";
import Community from "./components/Community";

export default function Home() {
  return (
    <>
    <Intro/>
    <Brands/>
    <NEWARRIVALS/>
    <Bannersection/>
    <Favouritesection/>
    <Download/>
    <Community/>

    </>
  );
}

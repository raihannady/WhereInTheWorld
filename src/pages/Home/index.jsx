import React from "react";
import { useState, useEffect } from "react";

import Header from "../../components/Header";
import MediaCard from "../../components/Card";
import Searchbar from "../../components/Searchbar";
import Filter from "../../components/Filter";

import classes from "./style.module.scss";

const Home = () => {
  return (
    <>
      <Header />
      <div className={classes.top}>
        <Searchbar />
        <Filter />
      </div>

      <MediaCard />
    </>
  );
};

export default Home;

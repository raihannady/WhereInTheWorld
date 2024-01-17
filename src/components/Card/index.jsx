// MediaCard.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { callAPI } from "../../domain/api";
import classes from "./style.module.scss";

const MediaCard = () => {
  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await callAPI("/all", "GET");
    setData(response);
  };

  return (
    <div className={classes.card}>
      {data &&
        data.map((country, index) => (
          <Card sx={{ maxWidth: 345 }} key={index}>
            <Link className={classes.cardLink} to={`/${country.name.common}`}>
              <CardMedia
                component="img"
                alt="green iguana"
                height="210"
                image={country.flags.png}
                className={classes.cardImage}
              />
              <CardContent>
                <Typography gutterBottom variant="body1" component="div">
                  <b>{country.name.common}</b>
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <b>Population : </b>
                  {formatNumberWithCommas(country.population)} <br />
                  <b>Region : </b>
                  {country.region} <br />
                  <b>Capital : </b>
                  {country.capital} <br />
                </Typography>
              </CardContent>
            </Link>
          </Card>
        ))}
    </div>
  );
};

export default MediaCard;

// CountryDetail.js
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import classes from "./style.module.scss";
import { Typography } from "@mui/material";

import { callAPI } from "../../domain/api";
import Header from "../../components/Header";

const CountryDetail = () => {
  const [country, setCountry] = useState(null);
  const [loading, setLoading] = useState(true);

  const { name } = useParams();

  useEffect(() => {
    fetchData();
  }, [name]);

  const fetchData = async () => {
    try {
      const response = await callAPI(`/name/${name}`, "GET");
      setCountry(response);
    } catch (error) {
      console.error("Error fetching country details:", error);
      // Handle error (e.g., set an error state)
    } finally {
      setLoading(false);
    }
  };

  const formatNumberWithCommas = (number) => {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
  };

  return (
    <div>
      <Header />
      {loading ? (
        <p>Loading...</p>
      ) : (
        country &&
        country.map((country, index) => (
          <div key={index}>
            <div className={classes.country}>
              <div>
                <img
                  className={classes.countryImage}
                  src={country.flags.png}
                  alt=""
                />
              </div>
              <div>
                <div>
                  <Typography gutterBottom variant="h3" component="div">
                    <b>{country.name.common}</b>
                  </Typography>
                </div>
                <div className={classes.countryDesc}>
                  <div>
                    <b>Native Name :</b>{" "}
                    {
                      country.name.nativeName[
                        Object.keys(country.name.nativeName)[0]
                      ].common
                    }{" "}
                    <br />
                    <b>Population:</b>
                    {formatNumberWithCommas(country.population)} <br />
                    <b>Region : </b> {country.region} <br />
                    <b>Sub Region : </b> {country.subregion} <br />
                    <b>Capital : </b> {country.capital[0]}
                  </div>
                  <div>
                    <b>Top Level Domain : </b> {country.tld[0]} <br />
                    <b>Currencies : </b>{" "}
                    {Object.values(country.currencies)[0].name} <br />
                    <b>Languages : </b> {Object.values(country.languages)[0]}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default CountryDetail;

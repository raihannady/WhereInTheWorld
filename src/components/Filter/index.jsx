import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";

import { useState, useEffect } from "react";

import { callAPI } from "../../domain/api";

export default function Filter() {
  const [region, setRegion] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchByRegion = async (selectedRegion) => {
    setLoading(true);
    try {
      const response = await callAPI(`/region/${selectedRegion}`, "GET");
      const data = await response.json();
      setRegion(data);
    } catch (error) {
      console.error("Error fetching region data:", error);
      // Handle error (e.g., set an error state)
    } finally {
      setLoading(false);
    }
  };

  const handleRegionChange = (_, selectedRegion) => {
    if (selectedRegion) {
      fetchByRegion(selectedRegion.label);
    }
  };

  return (
    <Autocomplete
      id="country-select-demo"
      sx={{ width: 300 }}
      options={countries}
      autoHighlight
      getOptionLabel={(option) => option.label}
      onChange={handleRegionChange}
      renderOption={(props, option) => (
        <Box component="li" {...props}>
          {option.label}
        </Box>
      )}
      renderInput={(params) => (
        <TextField
          {...params}
          label="Filter by Region"
          inputProps={{
            ...params.inputProps,
            autoComplete: "new-password", // disable autocomplete and autofill
          }}
        />
      )}
      isOptionEqualToValue={(option, value) => option.label === value.label}
      loading={loading}
    />
  );
}

const countries = [
  { label: "Africa" },
  { label: "Americas" },
  { label: "Asia" },
  { label: "Europe" },
  { label: "Oceania" },
];

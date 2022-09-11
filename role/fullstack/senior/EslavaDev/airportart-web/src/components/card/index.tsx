import {Grid} from "@mui/material";
import React, { FC } from "react";
import './styles.scss'

export const Card: FC = (props: any) => {
  const { name, airportCode, locationId } = props;
  const { country, provinceOrState } = locationId || {};
  return (
    <Grid item xs={2} spacing={2} className="card-container" >
      <Grid item xs={12}>
        <h3>
          {airportCode} - {name}
        </h3>
      </Grid>
      <Grid item xs={12}>
        <p>
          {provinceOrState} - {country}
        </p>
      </Grid>
    </Grid>
  );
};

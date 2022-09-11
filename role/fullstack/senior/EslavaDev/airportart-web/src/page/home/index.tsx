import { Box, Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Card } from "../../components/card";
import { AirportsService } from "../../services/airport/airports.services";
import "./styles.scss";

export const Home = () => {
  const [data, setData] = useState([]);
  const [count, setCount] = useState(0);
  const [page, setPage] = useState(1);
  const service = new AirportsService();
  useEffect(() => {
    initFetchCount();
  }, []);
  const initFetchCount = async () => {
    const { count: resultCount } = await service.countAirports();
    const countLocal = resultCount / 10;
    setCount(countLocal);
    setPage(1);
    await initFetchData(page, countLocal);
  };

  const initFetchData = async (pageLocal: number, countParam?: number) => {
    console.log(pageLocal, count);
    const countLocal = countParam || count;
    if (pageLocal > 0 && pageLocal <= countLocal) {
      const dataResponse = await service.getAllAirports(pageLocal);
      setPage(pageLocal);
      setData(dataResponse);
      console.log(dataResponse);
    }
  };
  return (
    <Box sx={{ flexGrow: 1 }} className="home-container">
      Home: {count}
      <Grid
        container
        className="grid-home-container"
      >
        {data.length > 0 && data.map((item: any) => <Card {...item} />)}
      </Grid>
      <Button onClick={() => initFetchData(page - 1)}>prev</Button>
      {page}
      <Button onClick={() => initFetchData(page + 1)}>next</Button>
    </Box>
  );
};

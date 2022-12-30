import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import { Box, Stack } from "@mui/system";
import React from "react";

const Service = () => {
  const serviceData = [
    {
      img: "https://i.ibb.co/7v1gV5Y/biofuels-1.jpg",
      title: "BIO Fuel Production",
      description:
        "Replacing fossil fuels with biofuels has the potential to generate a number of benefits. In contrast to fossil fuels, which are exhaustible resources, biofuels are produced from renewable feedstocks.Protect environment for your future generation",
    },
    {
      img: " https://i.ibb.co/n89zDd3/dustbin.jpg",
      title: "Waste Recycle",
      description:
        "Recycling reduces the need to grow, harvest or extract new raw materials from the Earth.Making products from recycled materials requires less energy than making them from new raw materials. Sometimes it's a huge difference in energy.",
    },
    {
      img: "https://i.ibb.co/XpG5d1s/man-recyle.webp",
      title: "Waste Collection",
      description:
        "One of the most significant benefits of waste management is the protection of the environment and the health of the population.By smartly managing your waste, you also help conserve natural resources including minerals, water and wood. So this is the effect of reducing, reusing and recycling.",
    },
    {
      img: "  https://i.ibb.co/7r1v2vv/recycle.jpg",
      title: "Teach of Environment",
      description:
        "Venturing out into nature with young children is an excellent way to help positively stimulate the senses and foster an appreciation of our earth. Arizona is the perfect place to experience a variety of landscapes including forest, red rock, mountains and desert..",
    },
    {
      img: "https://i.ibb.co/SJxNkz8/save-water.jpg",
      title: "Save Water",
      description:
        "Water is essential to our daily lives. Whenever water is used, there is a potential for conservation both inside and outside of your home or business. Fresh water is a limited resource. With population growth for climate change impacts there is increasing pressure placed on the province’s water resources.",
    },
    {
      img: "https://i.ibb.co/3pLRwDH/trees.jpg",
      title: "Planting Trees",
      description:
        "Trees provide an unthinkable number of sustainable benefits for our planet and for everything that inhabits it. From juvenile turtles learning their trade in the sea all the way to farmers and families working around the world, trees are an indispensable natural asset to all of us.",
    },
  ];
  return (
    <Box sx={{ py: 2, backgroundColor: "#C8DBBE" }}>
      <Typography variant="h4" color="#5F8D4E" textAlign="center">
        Services & Solutions
      </Typography>
      <hr />
      <Typography
        textAlign="center"
        sx={{
          mb: "6px",
        }}
      >
        We offer comprehensive recycling, industry-specific waste management,
        quality control & sustainability solutions for businesses and
        corporations.
      </Typography>

      <Box sx={{ width: "65%", mx: "auto" }}>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 1, sm: 8, md: 12 }}
        >
          {serviceData.map((data, index) => (
            <Grid
              item
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              xs={2}
              sm={4}
              md={4}
              key={index}
            >
              <Card sx={{ maxWidth: 345 }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="140"
                    image={data.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {data.title}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {data.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
};

export default Service;

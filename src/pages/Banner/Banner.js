import { Button, Typography, useMediaQuery } from "@mui/material";
import { useTheme } from "@mui/system";
import {
    BannerContainer,
    BannerContent,
    BannerDescription,
    BannerImage,
    BannerShopButton,
    BannerTitle,
} from "../../styles/banner";

export default function Banner() {
    const theme = useTheme();
    const matches = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <BannerContainer  >
            <BannerImage src="https://i.ibb.co/1frpvH0/chris-leboutillier-c7-RWVGL8l-PA-unsplash.jpg" />
            <BannerContent>
                <Typography variant="h6">Let’s Unite to Save the Environment!</Typography>
                <BannerTitle variant="h2">
                    Let's Make Beautiful World
                </BannerTitle>

                <BannerDescription variant="subtitle">
                    The environment is the greatest luxury, pledge to save the environment!
                </BannerDescription>

                <BannerShopButton sx={{
                   
                }} color="primary">Event</BannerShopButton>
            </BannerContent>
        </BannerContainer>
    );
}

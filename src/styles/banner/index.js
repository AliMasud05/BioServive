import { Box, Button, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { Colors } from "../theme";

export const BannerContainer = styled(Box)(({ matches, theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  height: "80vh",
  marginBottom:'-3px',
  padding: "0px 0px",
 
  [theme.breakpoints.down("sm")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    alignItems: "center",
  },
  // backgroundImage: `url(/images/banner/banner.png)`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
}));

export const BannerContent = styled(Box)(() => ({
  display: "flex",
  flex:'1',
  flexDirection: "column",
  justifyContent: "center",
  backgroundImage:
  "url('https://i.ibb.co/RSyVN03/volunteer.jpg')",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  color:'#fff', 
  padding: "30px",
}));

export const BannerImage = styled("img")(({ src, theme }) => ({
  src: `url(${src})`,
  // backgroundImage: `url(${src})`,
  // backgroundRepeat: "no-repeat",
  // backgroundPosition: "center",
  width: "100%",
  flex:'1',
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
  [theme.breakpoints.down("sm")]: {
    width: "100%",
    height: "300px",
  },
}));

export const BannerTitle = styled(Typography)(({ matches, theme }) => ({
  lineHeight: 1.5,
  fontSize: "72px",
  marginBottom: "20px",
  [theme.breakpoints.down('sm')]: {
    fontSize: '42px',    
  }
}));

export const BannerDescription = styled(Typography)(({ theme }) => ({
  lineHeight: 1.25,
  letterSpacing: 1.25,
  marginBottom: "3em",
  [theme.breakpoints.down("md")]: {
    lineHeight: 1.15,
    letterSpacing: 1.15,
    marginBottom: "1.5em",
  },
}));

export const BannerShopButton = styled(Button, {
  // Configure which props should be forwarded on DOM
  shouldForwardProp: (prop) => prop !== "color",
  name: "MyShopButton",
  slot: "Root",
  // We are specifying here how the styleOverrides are being applied based on props
  overridesResolver: (props, styles) => [
    styles.root,
    props.color === "primary" && styles.primary,
    props.color === "secondary" && styles.secondary,
  ],
})(({ theme }) => ({
  padding: "20px 0px",
  color: Colors.white,
  backgroundColor:'#3F0071',
  fontWeight: "bold",
  fontSize: "16px",
  [theme.breakpoints.down("sm")]: {
    padding: "10px 0px",
    fontSize: "14px",
  },
}));

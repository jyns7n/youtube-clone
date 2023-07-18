import { Stack, Typography } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";
import SearchBar from "./SearchBar";

const Navbar = () => (
  <Stack
    direction="row"
    alignItems="center"
    p={2}
    sx={{
      position: "sticky",
      background: "#0f0f0f",
      top: 0,
      justifyContent: "space-between",
    }}
  >
    <Link to="/" style={{ display: "flex", alignItems: "center" }}>
      <img src={logo} alt="logo" height={45} />
      <Typography
        className="title"
        sx={{
          ml: 2,
          color: "#fff",
          fontWeight: "bold",
          fontSize: "1.5rem",
          display: { xs: "none", md: "inline" },
        }}
      >
        MeTube
      </Typography>
    </Link>
    <SearchBar />
  </Stack>
);

export default Navbar;

import { Stack } from "@mui/material";

import { catagories } from "../utils/constants";

const Sidebar = ({ selectedCatagory, setSelectedCatagory }) => (
  <Stack
    direction="row"
    sx={{
      overflowY: "auto",
      height: { sx: "auto", md: "95%" },
      flexDirection: { md: "column" },
    }}
  >
    {catagories.map((catagory) => (
      <button
        className="category-btn"
        onClick={()=> setSelectedCatagory(catagory.name)}
        style={{
          background: catagory.name === selectedCatagory && "#fc1503",
          color: "white",
        }}
        key={catagory.name}
      >
        <span
          style={{
            color: catagory.name === selectedCatagory ? "white" : "red",
            marginRight: "15px",
          }}
        >
          {catagory.icon}
        </span>
        <span
          style={{ opacity: catagory.name === selectedCatagory ? "1" : "0.8" }}
        >
          {catagory.name}
        </span>
      </button>
    ))}
  </Stack>
);

export default Sidebar;

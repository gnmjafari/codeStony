import React from "react";
import { Typography } from "@mui/material";

function ProfileItem({ Title, info, sx, childStyle }) {
  return (
    <Typography variant="h6" sx={sx}>
      {Title}
      <Typography variant="h5" sx={childStyle}>
        {info}
      </Typography>
    </Typography>
  );
}

export default ProfileItem;

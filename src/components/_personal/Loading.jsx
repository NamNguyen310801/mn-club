"use client";
import { Backdrop, CircularProgress } from "@mui/material";

export default function Loading({ open, handleClose }) {
  return (
    <Backdrop
      sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
      open={open}
      onClick={handleClose}>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

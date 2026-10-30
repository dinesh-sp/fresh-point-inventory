import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  Divider,
  IconButton,
  keyframes,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import { IForm } from "./interface";
import { AcUnit, Remove } from "@mui/icons-material";
import { useEffect, useState } from "react";
import "./style/style.css";

export const Form = (props: IForm) => {
  const {
    title,
    children,
    description,
    action,
    submitting,
    footerAction = true,
  } = props;
  const { Close, Cancle, Reset, Submit = undefined } = action;
  const [higLtr, SetHigLtr] = useState<string>("");

  useEffect(() => {
    const interval = setInterval(() => {
      SetHigLtr(getRandomColor());
    }, 5 * 1000);
    return () => clearInterval(interval);
  });
  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

  return (
    <>
      <Backdrop
        sx={(theme) => ({ color: "#fff", zIndex: theme.zIndex.drawer + 1 })}
        open={submitting ?? false}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
      <Paper
        elevation={4}
        sx={{
          borderRadius: 3,
          overflow: "hidden",
          background: "#fafafa",
          pb: 2,
          borderTop: `0.6rem solid ${higLtr}`,
          transition: "border-top-color 500ms ease-in-out",
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            px: 3,
            py: 0.5,
            borderBottom: 1,
            borderColor: "divider",
          }}
          mb={5}
        >
          <Stack direction="row" spacing={1.5} alignItems="flex-start">
            <AcUnit className="icon-pulse" color="success" />
            <Stack spacing={0.25}>
              <Typography variant="h5" fontWeight={600}>
                {title}
              </Typography>
              <Typography variant="body2" className="txt-sub-header">
                {description ?? ""}
              </Typography>
            </Stack>
          </Stack>
          <IconButton
            size="small"
            color="default"
            onClick={Close}
            aria-label="Close"
          >
            <Remove />
          </IconButton>
        </Box>
        <Box
          component="form"
          noValidate
          onSubmit={(e) => {
            e.preventDefault();
            Submit?.();
          }}
        >
          {children}
          {footerAction && (
            <>
              {" "}
              <Divider sx={{ mt: 2 }} />
              <Stack
                direction="row"
                spacing={2}
                justifyContent="flex-end"
                mt={2}
                mr={2}
              >
                <Button
                  variant="contained"
                  onClick={Reset}
                  sx={{
                    borderBottom: `0.2rem solid ${getRandomColor()}`,
                    borderTop: `0.2rem solid ${getRandomColor()}`,
                    borderRadius: 3,
                  }}
                >
                  Reset
                </Button>

                <Button
                  type="submit"
                  variant="contained"
                  disabled={submitting}
                  sx={{
                    borderBottom: `0.2rem solid ${getRandomColor()}`,
                    borderTop: `0.2rem solid ${getRandomColor()}`,
                    borderRadius: 3,
                  }}
                >
                  Save
                </Button>
              </Stack>
            </>
          )}
        </Box>
      </Paper>
    </>
  );
};

import {
  Box,
  Divider,
  Grid,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  ListSubheader,
  Paper,
} from "@mui/material";
import { ConfigCards } from "./data";
import { useNavigate } from "react-router-dom";
import { ErrorOutline } from "@mui/icons-material";

export const CfgList = () => {
  const navigate = useNavigate();

  const getRandomColor = () =>
    `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, "0")}`;

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container rowSpacing={3} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          {ConfigCards.sort((previous,current)=> previous.id - current.id).map((card) => (
            <>
              <Grid item xs={4} md={4} key={card.id}>
                <Paper
                  elevation={2}
                  sx={{ borderTop: `0.5rem solid ${getRandomColor()}` }}
                >
                  <List
                    subheader={
                      <ListSubheader
                        sx={{
                          bgcolor: "primary.main",
                          color: "primary.contrastText",
                          fontWeight: 700,
                          fontSize: "1rem",
                          px: 2,
                          py: 1,
                          borderRadius: "4px 4px 0 0",
                          lineHeight: 1.5,
                        }}
                      >
                        {card.header}
                      </ListSubheader>
                    }
                  >
                    <Divider />

                    {card.items.map((item: any) => {
                      const Icon = item.icon;

                      return (
                        <ListItemButton key={item.id}>
                          <ListItemIcon>
                            <Icon />
                          </ListItemIcon>

                          <ListItemText
                            primary={item.text}
                            secondary={item.description ?? ""}
                            onClick={() => navigate(item.navigation)}
                            secondaryTypographyProps={{
                              variant: "body2",
                              color: "#928E85",
                              fontSize:'0.6 rem',
                              noWrap: true, // optional
                            }}
                          />
                          <ErrorOutline
                            color="error"
                            fontSize="small"
                            sx={{ ml: "auto" }}
                          />
                        </ListItemButton>
                      );
                    })}
                  </List>
                </Paper>
              </Grid>
            </>
          ))}
        </Grid>
      </Box>
    </>
  );
};

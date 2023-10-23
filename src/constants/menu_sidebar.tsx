import { HomeRounded, Note, Settings } from "@mui/icons-material";

export const menu = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <HomeRounded />
  },
  {
    id: 2,
    name: "Notes",
    path: "/notes",
    icon: <Note />
  },
  {
    id: 3,
    name: "Settings",
    path: "/settings",
    icon: <Settings />
  }
]

export default {};

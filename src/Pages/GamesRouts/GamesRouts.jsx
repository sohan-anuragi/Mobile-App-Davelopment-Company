import AppLayout from "../../AppLayout";
import ActionGameDevelopment from "./ActionGame";
import AndroidGameDev from "./AndroidGame";
import EducationalGameDevelopment from "./EducationalGame";
import MultiplayerGameDevelopment from "./MultiPlayerGame";
import IphoneGameDev from "./iPhoneGame";
import SportGameDev from "./SportsGame";

export const GamesRouts = [
  {
    path: "/applayout",
    element: <AppLayout />,
    children: [
      { path: "action-game-development", element: <ActionGameDevelopment /> },
      { path: "android-game-development", element: <AndroidGameDev /> },
      {
        path: "educational-game-development",
        element: <EducationalGameDevelopment />,
      },
      {
        path: "multiplayer-games-development",
        element: <MultiplayerGameDevelopment />,
      },
      { path: "iphone-game-development", element: <IphoneGameDev /> },
      { path: "sport-game-development", element: <SportGameDev /> },
    ],
  },
];

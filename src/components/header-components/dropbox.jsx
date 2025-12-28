import GamezoneBar from "./gamezonebar.jsx";
import { HeaderDataContext } from "./header-context.jsx";
import SoftwereBar from "./softwerebar.jsx";
import SolutionBar from "./solution.jsx";
import ServiceBar from "./servicebar.jsx";
import TechnologyBar from "./technologybar.jsx";
import { useContext } from "react";

export default function DropBox() {
  const { toggle2 } = useContext(HeaderDataContext);

  return (
    <>
      {toggle2 === "Technology" && <TechnologyBar></TechnologyBar>}
      {toggle2 === "Services" && <ServiceBar></ServiceBar>}
      {toggle2 === "Solutions" && <SolutionBar></SolutionBar>}
      {toggle2 === "Softwere" && <SoftwereBar></SoftwereBar>}
      {toggle2 === "Game Zone" && <GamezoneBar></GamezoneBar>}
    </>
  );
}

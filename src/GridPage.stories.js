import React from "react";
import GridPage from "./GridPage";


export default {
    title: "GridPage",
    component: GridPage,
};


export const Default = () => <GridPage position="0 0 SOUTH" />;
export const EdgeCase = () => <GridPage position="4 4 WEST" />;
export const EastPosition = () => <GridPage position="2 3 EAST" />;
export const NorthPosition = () => <GridPage position="1 3 NORTH" />;
export const WestPosition = () => <GridPage position="3 2 WEST" />;
export const SouthPosition = () => <GridPage position="2 1 SOUTH" />;
export const InvalidCoordinates = () => <GridPage position="5 5 NORTH" />;
export const InvalidPosition = () => <GridPage position="invalid position" />;  

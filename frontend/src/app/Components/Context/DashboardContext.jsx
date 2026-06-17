"use client";
import { createContext, useContext } from "react";

// Lets a widget remove itself from the dashboard via its settings menu, without
// each widget needing wiring from the page. Provided by the dashboard (page).
export const DashboardContext = createContext(null);

export const useDashboard = () => useContext(DashboardContext);

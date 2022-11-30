import { Notes } from "domains/Notes/Notes";
import React from "react";
import { Route, Routes } from "react-router-dom";

type NavbarPage = {
  label: React.ReactNode;
  route: string;
};

export const NAVBAR_PAGES: NavbarPage[] = [{ label: "Notes", route: "notes" }];
export const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<Notes />} />
      <Route path="/notes" element={<Notes />} />
    </Routes>
  );
};

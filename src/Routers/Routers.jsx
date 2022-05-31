import React from "react";
import { Route, Routes } from "react-router-dom";
import { BookMark, Explore, Homepage, Login, Profile, Signup } from "../Pages";
import { RequireAuth } from "../RequireAuth";
import MockmanEs from "mockman-js";

export const Routers = () => {
  return (
    <div>
      <Routes>
        <Route path="/mock" element={<MockmanEs />} />
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/homepage"
          element={
            <RequireAuth>
              <Homepage />
            </RequireAuth>
          }
        />
        <Route
          path="/profile"
          element={
            <RequireAuth>
              <Profile />
            </RequireAuth>
          }
        />
        <Route
          path="/explore"
          element={
            <RequireAuth>
              <Explore />
            </RequireAuth>
          }
        />
        <Route
          path="/bookmark"
          element={
            <RequireAuth>
              <BookMark />
            </RequireAuth>
          }
        />
      </Routes>
    </div>
  );
};

import React from "react";
import { Route, Routes } from "react-router-dom";
import App from "src/App";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<App />}>
        <Route
          path="*"
          element={
            <div>
              <h2>404 Page Not Found</h2>
            </div>
          }
        />
      </Route>
    </Routes>
  );
}

export default Router;

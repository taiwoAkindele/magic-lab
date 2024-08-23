import { Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import routes from "./routes";
import { paths } from "./routes/path";
import "./App.css";
import NoMatch from "./components/NoMatch";
import ContentLayout from "./layout";

function App() {
  return (
    <Routes>
      <Route element={<ContentLayout />}>
        <Route index element={<Navigate to={paths.STUDENT_DASHBOARD} />} />
        {routes.map(({ component: Component, path }) => (
          <Route
            path={path}
            key={path}
            element={
              <Suspense fallback="Loading...">
                <Component />
              </Suspense>
            }
          />
        ))}
      </Route>
      <Route path="*" element={<NoMatch />} />
    </Routes>
  );
}

export default App;

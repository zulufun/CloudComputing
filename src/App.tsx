import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { store, persistor } from "./redux";
import { RouterLinks } from "./const/RouterLinks";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./layouts/Layout";
import NotFound from "./pages/not-found/NotFound";
import ThongKeTime from "./pages/thong-ke-time";
import ThongKeCount from "./pages/thong-ke-count";
import KiemTraWebsite from "./pages/kiem-tra-website";
import ErrorPage from "./pages/error-page/ErrorPage";
import Profile from "./pages/profile/Profile";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <PersistGate loading={null} persistor={persistor}>
          <div className="MainApp">
            <div className="ContentApp">
              <Routes>
                <Route
                  path="/"
                  element={<MainLayout />}
                  errorElement={<ErrorPage />}
                >
                  <Route
                    path={RouterLinks.THONG_KE_TIME}
                    element={<ThongKeTime />}
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path={RouterLinks.THONG_KE_COUNT}
                    element={<ThongKeCount />}
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path={RouterLinks.KIEM_TRA_WEBSITE}
                    element={<KiemTraWebsite />}
                    errorElement={<ErrorPage />}
                  />
                  <Route
                    path={RouterLinks.PROFILE}
                    element={<Profile />}
                    errorElement={<ErrorPage />}
                  />
                </Route>
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </div>
        </PersistGate>
      </BrowserRouter>
    </Provider>
  );
}

export default App;

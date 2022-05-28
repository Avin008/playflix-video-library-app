import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter } from "react-router-dom";
import { AuthContextProvider } from "./context/auth-context";
import { VideoContextProvider } from "./context/video-context";
import { HistoryContextProvider } from "./context/history-context";
import { LikedContextProvider } from "./context/like-context";
import { WatchLaterContextProvider } from "./context/watch-later-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthContextProvider>
        <VideoContextProvider>
          <HistoryContextProvider>
            <LikedContextProvider>
              <WatchLaterContextProvider>
                <App />
              </WatchLaterContextProvider>
            </LikedContextProvider>
          </HistoryContextProvider>
        </VideoContextProvider>
      </AuthContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

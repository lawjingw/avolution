import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { Provider } from "react-redux";
import { store } from "./app/store.js";
import { Toaster } from "react-hot-toast";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ top: 16 }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 3000,
          },
          style: {
            fontSize: "14px",
            maxWidth: "500",
            padding: "16px 24px",
            backgroundColor: "rgb(241, 219, 222)",
            color: "#A94442",
          },
        }}
      />
      <App />
    </Provider>
  </React.StrictMode>,
);

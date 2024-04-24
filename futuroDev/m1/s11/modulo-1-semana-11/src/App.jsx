import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./components/pages/Home";
import {
 Promises,
 Fetch,
 BrowserApi,
 LocalStorage,
 Json
} from "./components/pages/Javascript";

import {
 ControlledVsUncontrolledComponents,
 Hooks,
 SideEffects,
 StartWithReactHookForms
} from "./components/pages/React";
import NotFound from "./components/pages/NotFound";
import { AuthContextProvider } from "./contexts/auth";
import MainLayout from "./components/organisms/MainLayout";
import { ThemeProvider, createTheme } from "@mui/material";
import StartWithContexts from "./components/pages/React/StartWithContexts";

function App() {
 const router = createBrowserRouter([
  {
   path: "/",
   element: <MainLayout />,
   children: [
    {
     path: "/",
     element: <Home />
    },
    {
     path: "/javascript",
     children: [
      {
       path: "promises",
       element: <Promises />
      },
      {
       path: "fetch",
       element: <Fetch />
      },
      {
       path: "browser-api",
       element: <BrowserApi />
      },
      {
       path: "local-storage",
       element: <LocalStorage />
      },
      {
       path: "json",
       element: <Json />
      }
     ]
    },
    {
     path: "/react",
     children: [
      {
       path: "hooks",
       element: <Hooks />
      },
      {
       path: "componentes-controlados-e-nao-controlados",
       element: <ControlledVsUncontrolledComponents />
      },
      {
       path: "efeito-colateral",
       element: <SideEffects />
      },
      {
       path: "react-hook-form",
       element: <StartWithReactHookForms />
      },
      {
       path: "context-api",
       element: <StartWithContexts />
      }
     ]
    }
   ]
  },
  {
   path: "*",
   element: <NotFound />
  }
 ]);

 const theme = createTheme({
  palette: {
   mode: "dark",
   primary: {
    main: "#299c80",
    dark: "#2a473f",
    contrastText: "#f5f5f5"
   }
  }
 });

 return (
  <ThemeProvider theme={theme}>
   <AuthContextProvider>
    <RouterProvider router={router} />
   </AuthContextProvider>
  </ThemeProvider>
 );
}

export default App;

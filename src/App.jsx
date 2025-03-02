import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage, { randomCarsLoader } from "./routes/HomePage";
import RootLayout, { authLoader } from "./routes/RootLayout";
import AboutPage from "./routes/AboutPage";
import RentACar, { carsLoader, searchAction } from "./routes/RentACar";
import LoginPage, { loginAction } from "./routes/LoginPage";
import RegisterPage, { registerAction } from "./routes/RegisterPage";

import CarDetailsPage, { carDetailsLoader } from "./routes/CarDetailsPage";

import BookingPage, { bookCar, creditCardsLoader } from "./routes/BookingPage";
import AddCardPage, { addCreditCard } from "./routes/AddCardPage";
import AdminPage from "./routes/AdminPage";
import RegisterCarPage, { registerCarAction } from "./routes/RegisterCarPage";
import ReportsPage, { reportsAction } from "./routes/ReportsPage";
import BranchPage, { branchAction, branchLoader } from "./routes/BranchPage";
import ErrorPage from "./routes/ErrorPage";
import Logout, { logoutAction } from "./routes/Logout";

import UserPage, {
  userDataLoader,
  userUpdateAndDeleteAction,
} from "./routes/UserPage";
import Account from "./components/Account";
import UserReservationsPage, {
  cancelReservationAction,
} from "./routes/UserReservationsPage";
import UserCreditCardsPage, {
  deleteCardAction,
} from "./routes/UserCreditCardsPage";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      loader: authLoader,
      id: "authLoader",
      children: [
        {
          path: "/",
          element: <HomePage />,

          loader: randomCarsLoader,
          children: [
            {
              path: "branch",
              element: <BranchPage />,
              loader: branchLoader,
              action: branchAction,
            },
          ],
        },
        { path: "about", element: <AboutPage /> },
        {
          path: "rentacar",
          element: <RentACar />,
          action: searchAction,
          loader: carsLoader,
        },

        {
          path: "/user",
          element: <UserPage />,
          loader: userDataLoader,
          id: "userDataLoader",
          children: [
            {
              path: "account",
              element: <Account />,
              action: userUpdateAndDeleteAction,
            },
            {
              path: "reservations",
              element: <UserReservationsPage />,
              action: cancelReservationAction,
            },
            {
              path: "credit_cards",
              element: <UserCreditCardsPage />,
              action: deleteCardAction,
              children: [
                {
                  path: "addcreditcard",
                  element: <AddCardPage />,
                  action: addCreditCard,
                },
              ],
            },
          ],
        },
        {
          path: "/admin",
          element: <AdminPage />,
        },
        {
          path: "/admin/registercar",
          element: <RegisterCarPage />,
          action: registerCarAction,
        },
        {
          path: "/admin/reports",
          element: <ReportsPage />,
          action: reportsAction,
        },
        {
          path: "rentacar/:id",
          element: <CarDetailsPage />,
          id: "car",
          loader: carDetailsLoader,
          children: [
            {
              path: "booking",
              element: <BookingPage />,
              action: bookCar,
              loader: creditCardsLoader,
            },
            {
              path: "addcreditcard",
              element: <AddCardPage />,
              action: addCreditCard,
            },
          ],
        },

        { path: "/login", element: <LoginPage />, action: loginAction },
        { path: "/logout", element: <Logout />, action: logoutAction },
        {
          path: "/register",
          element: <RegisterPage />,
          action: registerAction,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

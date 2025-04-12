import {
  createBrowserRouter,
  RouterProvider,
  useParams,
} from "react-router-dom";
import HomePage, { randomCarsLoader } from "./routes/HomePage";
import RootLayout, { authLoader } from "./routes/RootLayout";
import { lazy } from "react";

const AboutPage = lazy(() => import("./routes/AboutPage"));
const LoginPage = lazy(() => import("./routes/LoginPage"));
const RegisterPage = lazy(() => import("./routes/RegisterPage"));
const CarDetailsPage = lazy(() => import("./routes/CarDetailsPage"));
const BookingPage = lazy(() => import("./routes/BookingPage"));
const AddCardPage = lazy(() => import("./routes/AddCardPage"));
const AdminPage = lazy(() => import("./routes/AdminPage"));
const RegisterCarPage = lazy(() => import("./routes/RegisterCarPage"));
const ReportsPage = lazy(() => import("./routes/ReportsPage"));
const UserPage = lazy(() => import("./routes/UserPage"));
const RentACar = lazy(() => import("./routes/RentACar"));
const UserReservationsPage = lazy(() =>
  import("./routes/UserReservationsPage")
);
const UserCreditCardsPage = lazy(() => import("./routes/UserCreditCardsPage"));
const ReviewCarPage = lazy(() => import("./routes/ReviewCarPage"));
const Account = lazy(() => import("./components/Account"));

import ErrorPage from "./routes/ErrorPage";
import Logout, { logoutAction } from "./routes/Logout";

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
        },
        { path: "about", element: <AboutPage /> },
        {
          path: "rentacar",
          element: <RentACar />,
          action: (args) =>
            import("./routes/RentACar").then((module) => module.action(args)),
        },

        {
          path: "/user",
          element: <UserPage />,
          loader: (args) =>
            import("./routes/UserPage").then((module) => module.loader(args)),
          id: "userDataLoader",
          children: [
            {
              path: "account",
              element: <Account />,
              action: (args) =>
                import("./routes/UserPage").then((module) =>
                  module.action(args)
                ),
            },
            {
              path: "reservations",
              element: <UserReservationsPage />,
              action: (args) =>
                import("./routes/UserReservationsPage").then((module) =>
                  module.action(args)
                ),
              children: [
                {
                  path: ":car_id/review",
                  element: <ReviewCarPage />,
                  action: (args) =>
                    import("./routes/ReviewCarPage").then((module) =>
                      module.action(args)
                    ),
                },
              ],
            },
            {
              path: "credit_cards",
              element: <UserCreditCardsPage />,
              action: (args) =>
                import("./routes/UserCreditCardsPage").then((module) =>
                  module.action(args)
                ),
              children: [
                {
                  path: "addcreditcard",
                  element: <AddCardPage />,
                  action: (args) =>
                    import("./routes/AddCardPage").then((module) =>
                      module.action(args)
                    ),
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
          action: (args) =>
            import("./routes/RegisterCarPage").then((module) =>
              module.action(args)
            ),
        },
        {
          path: "/admin/reports",
          element: <ReportsPage />,
          action: (args) =>
            import("./routes/ReportsPage").then((module) =>
              module.action(args)
            ),
        },
        {
          path: "rentacar/:id",
          element: <CarDetailsPage />,
          id: "car",
          loader: (args) =>
            import("./routes/CarDetailsPage").then((module) =>
              module.loader(args)
            ),
          children: [
            {
              path: "booking",
              element: <BookingPage />,
              action: (args) =>
                import("./routes/BookingPage").then((module) =>
                  module.action(args)
                ),
              loader: (args) =>
                import("./routes/BookingPage").then((module) =>
                  module.loader(args)
                ),
            },
            {
              path: "addcreditcard",
              element: <AddCardPage />,
              action: (args) =>
                import("./routes/AddCardPage").then((module) =>
                  module.action(args)
                ),
            },
          ],
        },

        {
          path: "/login",
          element: <LoginPage />,
          action: (args) =>
            import("./routes/LoginPage").then((module) => module.action(args)),
        },
        { path: "/logout", element: <Logout />, action: logoutAction },
        {
          path: "/register",
          element: <RegisterPage />,
          action: (args) =>
            import("./routes/RegisterPage").then((module) =>
              module.action(args)
            ),
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;

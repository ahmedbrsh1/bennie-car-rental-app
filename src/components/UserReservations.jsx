import { Form, Link, useRouteLoaderData } from "react-router-dom";

export default function UserReservations() {
  const userBookings = useRouteLoaderData("userDataLoader").bookings;

  return (
    <table>
      <thead>
        <tr>
          <th>Car</th>
          <th>Book Place</th>
          <th>Book Date</th>
          <th>Return Date</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        {userBookings.length > 0 ? (
          userBookings.map((booking, index) => (
            <tr key={booking.book_id}>
              <td>{`${booking.manufacturer} ${booking.model} (${booking.year})`}</td>
              <td>{booking.book_place}</td>
              <td>{booking.book_date}</td>
              <td>{booking.return_date}</td>
              <td>{booking.status}</td>
              {booking.status == "Pending Pick-Up" && (
                <td>
                  <Form method="POST">
                    <button
                      className="danger-button"
                      name="intent"
                      value={booking.book_id}
                    >
                      Cancel
                    </button>
                  </Form>
                </td>
              )}
              {booking.status === "Completed" && (
                <td>
                  <Link to={`5/review`}>Review</Link>
                </td>
              )}
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan="5">No bookings found.</td>
          </tr>
        )}
      </tbody>
    </table>
  );
}

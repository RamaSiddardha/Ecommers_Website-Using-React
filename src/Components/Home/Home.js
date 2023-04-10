import { Button, Table } from "react-bootstrap";

const Home = () => {
  const homeData = [
    {
      date: "JUL16",
      one: "DETROIT, MI",
      two: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      one: "DETROIT, MI",
      two: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      one: "DETROIT, MI",
      two: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      one: "DETROIT, MI",
      two: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      one: "DETROIT, MI",
      two: "DTE ENERGY MUSIC THEATRE",
    },
    {
      date: "JUL16",
      one: "DETROIT, MI",
      two: "DTE ENERGY MUSIC THEATRE",
    },
  ];

  return (
    <>
      <Table  className="table-sm m-5">
        <tbody>
          {homeData.map((date) => (
            <tr className="m-2">
              <td>{date.date}</td>
              <td>{date.one}</td>
              <td>{date.two}</td>
              <td>
                <Button variant="info">Buy Tickets</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default Home;

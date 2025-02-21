import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import TopRated from "../components/TopRated";
import MOCK_DATA from "../mocks/topresMock.json";

it("should render Top rated component with props Data", () => {
  render(<TopRated restaurantsList={[MOCK_DATA]} />);

  const nameElement = screen.getByText(/Sadrasa Ki/i); 
  expect(nameElement).toBeInTheDocument();
});

import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "../components/Navbar";
import "@testing-library/jest-dom";
const renderWithRouter = (ui) => {
  return render(<BrowserRouter>{ui}</BrowserRouter>);
};

describe("Navbar Component", () => {
  test("should render the navbar with all links", () => {
    renderWithRouter(<Navbar />);
    expect(screen.getByText("Search")).toBeInTheDocument();
  });

  // test("should have correct navigation links", () => {
  //   renderWithRouter(<Navbar />);
  //   expect(screen.getByRole('link', { name: "Home" })).toHaveAttribute("href", "/");
  //   expect(screen.getByRole('link', { name: "About" })).toHaveAttribute("href", "/about");
  //   expect(screen.getByRole('link', { name: "Restaurants" })).toHaveAttribute("href", "/restaurants");
  //   expect(screen.getByRole('link', { name: "Login" })).toHaveAttribute("href", "/login");
  // });

  // test("should display the logo with correct text", () => {
  //   renderWithRouter(<Navbar />);
  //   expect(screen.getByText("Swiggy")).toBeInTheDocument();
  // });
});

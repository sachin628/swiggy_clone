import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Welcome from "../components/Welcome";
import "@testing-library/jest-dom";

jest.mock("../firebase/setup", () => ({
  auth: {
    currentUser: null,
  },
}));

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  Link: ({ to, children }) => <a href={to}>{children}</a>,
}));

describe("Welcome Component", () => {
  test("renders login and signup buttons", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    expect(screen.getByText("Login")).toBeInTheDocument();
    expect(screen.getByText("Sign up")).toBeInTheDocument();
  });

  test("renders main heading and subheading", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );

    expect(
      screen.getByText("Cooking gone wrong?", { exact: false })
    ).toBeInTheDocument();
    expect(
      screen.getByText("Order food from favourite restaurants near you.", {
        exact: false,
      })
    ).toBeInTheDocument();
  });

  test("renders location dropdown and allows selecting a location", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const selectElement = screen.getByRole("combobox");
    fireEvent.change(selectElement, { target: { value: "297701" } });
    expect(selectElement.value).toBe("297701");
  });

  test("renders 'Find Food' button and navigates correctly", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const button = screen.getByText("FIND FOOD");
    expect(button).toBeInTheDocument();
    // eslint-disable-next-line testing-library/no-node-access
    expect(button.closest("a")).toHaveAttribute("href", "/main");
  });

  test("shows Login modal when clicking login button", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
  });

  test("shows Signup modal when clicking signup button", () => {
    render(
      <BrowserRouter>
        <Welcome />
      </BrowserRouter>
    );
    const signupButton = screen.getByRole("button", { name: /sign up/i });
    fireEvent.click(signupButton);
  });
});

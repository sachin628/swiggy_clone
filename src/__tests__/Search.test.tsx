import { render, screen} from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Search from "../components/Search";
import MOCK_DATA from "../mocks/mockResList.json";
import "@testing-library/jest-dom";

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => {
    console.log("Mock Data:", MOCK_DATA);
    return {
      state: { data: MOCK_DATA },
    };
  },
}));

describe("Search Component", () => {
  test("renders input field and cuisine buttons", () => {
    render(
      <MemoryRouter>
        <Search />
      </MemoryRouter>
    );

    expect(
      screen.getByPlaceholderText("Search for restaurants")
    ).toBeInTheDocument();
    expect(screen.getByText("Popular Cuisines")).toBeInTheDocument();
  });


});

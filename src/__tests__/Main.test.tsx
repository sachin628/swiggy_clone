import { render, screen, waitFor } from "@testing-library/react";
import Main from "../components/Main";
import "@testing-library/jest-dom";
import MOCK_DATA from "../mocks/mockResList.json";
import { MemoryRouter } from "react-router-dom";

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  })
) as jest.Mock;

describe("Main Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test("renders Navbar component", async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(screen.getByText("Best offers for you")).toBeInTheDocument();
  });

  test("fetches and displays restaurant data", async () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );

    await waitFor(() => {
      expect(global.fetch).toHaveBeenCalledTimes(1);
    });

    
    await waitFor(() => {
      expect(
        screen.getByText(/Top restaurant chains in/)
      ).toBeInTheDocument();
    });
  });

  test("renders Offers component", () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(screen.getByText("Best offers for you")).toBeInTheDocument();
  });

  test("renders Menu component", () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(screen.getByText("What's on your mind?")).toBeInTheDocument();
  });

  test("renders Footer component", () => {
    render(
      <MemoryRouter>
        <Main />
      </MemoryRouter>
    );
    expect(screen.getByText("Best offers for you")).toBeInTheDocument();
  });
});

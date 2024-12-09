import { screen, render } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/resListMockData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("Should render component with search button", async () => {
  /*   render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  ); */

  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });
  const SearchButton = screen.getByRole("button", { name: "Search" });

//   console.log(SearchButton);

  // Assertion
  expect(SearchButton).toBeInTheDocument();
});

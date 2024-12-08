import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import { appStore } from "../../utilits/ReduxToolkit/Store/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Shoule render Header component with a login  button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  expect(loginButton).toBeInTheDocument();
});

it("Shoule render Header component with cart 0 items", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const cartItems = screen.getByText("CART(0)");

  expect(cartItems).toBeInTheDocument();
});

it("Shoule render Header component with Online Status", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const OnlineStatur = screen.getByText("Online Status: ✅");

  expect(OnlineStatur).toBeInTheDocument();
});

it("Should change login button to logout while clicked(onClick)", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton = screen.getByRole("button", { name: "Login" });

  fireEvent.click(loginButton);

  const logOutButton = screen.getByRole("button", { name: "Logout" });

  expect(logOutButton).toBeInTheDocument();
});

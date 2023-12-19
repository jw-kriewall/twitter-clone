import * as React from 'react';
import { fireEvent, render, screen } from "@testing-library/react"
import { Provider } from "react-redux"
import { Counter } from "../Counter"
import { store } from "../../../app/store"

let counterPage;

beforeEach(() => {
  counterPage = render(
    <Provider store={store}>
      <Counter />
    </Provider>
  );
});

test("Click + works", async () => {
  const addButton = screen.getByLabelText("Increment value");
  fireEvent.click(addButton);

  const valueElement = await screen.findByText("1");

  expect(valueElement).toBeInTheDocument();
});

test("Add Amount button renders", async () => {
  await screen.findByText("Add Amount")
  expect(screen.getByText("Add Amount")).toBeVisible();
});

test("Click - works", async () => {
  const minusButton = screen.getByLabelText("Decrement value");
  fireEvent.click(minusButton);
  fireEvent.click(minusButton);

  const valueElement = await screen.findByText("-1");

  expect(valueElement).toBeInTheDocument();
});
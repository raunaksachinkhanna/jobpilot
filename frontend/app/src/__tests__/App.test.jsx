import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import App from "../App";

test("renders JobPilot title", () => {
  render(<App />);
  expect(screen.getByText(/JobPilot/i)).toBeInTheDocument();
});

test("inputs accept typing", async () => {
  const user = userEvent.setup();
  render(<App />);
  const name = screen.getByPlaceholderText(/Saadia Awais/i);
  await user.type(name, "Saadia");
  expect(name).toHaveValue("Saadia");
});

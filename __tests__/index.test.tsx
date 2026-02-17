import { render, screen } from "@testing-library/react";
import Home from "../app/page";

test("renders heading", () => {
  render(<Home />);
  const heading = screen.getByRole("heading", { name: /portfolio/i });
  expect(heading).toBeInTheDocument();
});

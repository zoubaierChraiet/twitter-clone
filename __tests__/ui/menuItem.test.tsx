import MenuItem from "@/components/MenuItem";
import { TvIcon } from "@heroicons/react/24/solid";
import { render, screen } from "@testing-library/react";

// Tabs
// Post
// SearchInput
// Trend

test("should render menu item correctly", () => {
  render(<MenuItem Icon={TvIcon} text="qsdsqd" href={"/"} />);
  const listItem = screen.getByTestId("menu-item");
  const icon = screen.getByTestId("icon");
  const menuItemText = screen.getByTestId("menue-iem-text");

  expect(menuItemText.textContent).toEqual("qsdsqd");
  expect(icon).toBeInTheDocument;
  expect(listItem).toBeInTheDocument;
});

import SearchInput from "@/components/SearchInput";
import { render, screen } from "@testing-library/react";

test("should display the correct profile informations", () => {
  const myProfile = {
    firstName: "zouba",
    imgLink: "/",
    userName: "zoubaier chraiet",
    lastName: "",
  };
  render(<SearchInput />);

  const search = screen.getByRole("textbox");

  expect(search).toBeInTheDocument;
});

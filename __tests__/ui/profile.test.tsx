import Profile from "@/components/Shared/Profile";
import { render, screen } from "@testing-library/react";

test("should display the correct profile informations", () => {
  const myProfile = {
    firstName: "zouba",
    imgLink: "/",
    userName: "zoubaier chraiet",
    lastName: "",
  };
  render(<Profile {...myProfile} />);

  const followButton = screen.getByTestId("follow-button");
  const userNameHeading = screen.getByTestId("username-heading");

  const userProfileImg = screen.getByRole("img");

  expect(userProfileImg).toBeInTheDocument;

  expect(followButton).not.toBeInTheDocument;

  expect(userNameHeading.textContent).toEqual("zoubaier chraiet");
});

/** @format */

import {render, screen} from "@testing-library/vue";

import MainVue from "@/components/Header/MainNav.vue";
import userEvent from "@testing-library/user-event";

describe("MainVue.vue", () => {
  it("renders a message", () => {
    render(MainVue, {
      props: {
        company: "Careers",
      },
    });
    expect(screen.getByText(/careers/i)).toBeInTheDocument();
  });

  it("describe menu items for navigation", () => {
    render(MainVue);

    const navigationItems = screen.getAllByRole("listitem");

    const navigationTextContent = navigationItems.map(item => item.textContent);

    expect(navigationTextContent).toEqual([
      "Teams",
      "Locations",
      "Life at Bobo Corp",
      "How we hire",
      "Jobs",
    ]);
  });

  it("describe when user not log in", async () => {
    render(MainVue);

    const profileImage = screen.queryByRole("img", {
      name: /User profile image/i,
    });
    expect(profileImage).not.toBeInTheDocument();

});

  it("describe user logs in", async () => {
    render(MainVue);

  
    
    const loginButton = screen.getByRole("button", {
      name: /sign in/i,
    });

    await userEvent.click(loginButton);

   const profileImage = screen.queryByRole("img", {
     name: /User profile image/i,
   });

    expect(profileImage).toBeInTheDocument()

  });
});

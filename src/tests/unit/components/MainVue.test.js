/** @format */

import {render, screen} from "@testing-library/vue";

import MainVue from "@/components/MainNav.vue";

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
});

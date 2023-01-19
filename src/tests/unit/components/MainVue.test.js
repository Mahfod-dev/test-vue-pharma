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
});

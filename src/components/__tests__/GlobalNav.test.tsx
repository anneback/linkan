import { render, screen } from "@testing-library/react";
import GlobalNav from "../GlobalNav";

describe("GlobalNav", () => {
  it("should render", () => {
    render(<GlobalNav />);
    expect(screen.getAllByTitle("LinkedIn logo").length).toBe(1);
    expect(screen.getAllByRole("link").length).toBe(5);
    expect(screen.getAllByRole("textbox").length).toBe(1);
    expect(screen.getAllByText("You").length).toBe(1);
  });
});

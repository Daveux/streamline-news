import React from "react";
import { render } from "@testing-library/react-native";
import { HomeScreen } from "../HomeScreen";

describe("HomeScreen", () => {
  it("renders content rails and video cards", () => {
    const { getByText, getAllByText } = render(
      <HomeScreen onSelectVideo={jest.fn()} />
    );

    // Rail titles
    expect(getByText("Top Stories")).toBeTruthy();
    expect(getByText("Live Now")).toBeTruthy();
    expect(getByText("Trending")).toBeTruthy();

    // Video appears in multiple rails
    const cards = getAllByText("Global Markets React to Inflation Data");
    expect(cards.length).toBeGreaterThan(0);
  });
});

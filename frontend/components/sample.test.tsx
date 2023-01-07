import { describe, expect, test } from "vitest";
import { Sample } from "./sample";
import { fireEvent, render, screen } from "@testing-library/react";

describe("test", () => {
  test("add", () => {
    render(<Sample></Sample>);

    expect(screen.getByRole("label").textContent).contains("0");
    fireEvent.click(screen.getByRole("button"));
    expect(screen.getByRole("label").textContent).contains("1");
  });
});

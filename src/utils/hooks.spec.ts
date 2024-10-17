import { renderHook, waitFor } from "@testing-library/react";
import { useExtractProps } from "@utils/hooks";

describe("useExtractProps", () => {
  it("Separates out component props from base props", async () => {
    const componentProps = { prop1: "value1", prop2: true };
    const { result } = renderHook(() =>
      useExtractProps(
        {
          ...componentProps,
          classes: { root: "root-class" },
        },
        "prefix",
        "suffix"
      )
    );

    await waitFor(() => {
      expect(result.current.id).toBeDefined();
    });

    expect(result.current.props).toStrictEqual(componentProps);
    expect(result.current.classes).toStrictEqual({ root: "root-class" });

    const idParts = result.current.id!.split("-");
    expect(idParts[0]).toEqual("prefix");
    expect(idParts[1].length).toEqual(8);
    expect(idParts[2]).toEqual("suffix");
  });
});

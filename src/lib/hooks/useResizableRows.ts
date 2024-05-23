import { useState, useCallback } from "react";

const useResizableRows = (dataLength: number, initialHeight: number = 48) => {
  const [rowHeights, setRowHeights] = useState(
    Array(dataLength).fill(initialHeight)
  );

  const handleMouseDown = useCallback(
    (index: number, e: React.MouseEvent<HTMLTableRowElement, MouseEvent>) => {
      const startY = e.clientY;
      const startHeight = rowHeights[index];

      const onMouseMove = (e: MouseEvent) => {
        const newHeight = startHeight + (e.clientY - startY);
        setRowHeights((heights) => {
          const newHeights = [...heights];
          newHeights[index] = newHeight;
          return newHeights;
        });
      };

      const onMouseUp = () => {
        document.removeEventListener("mousemove", onMouseMove);
        document.removeEventListener("mouseup", onMouseUp);
      };

      document.addEventListener("mousemove", onMouseMove);
      document.addEventListener("mouseup", onMouseUp);
    },
    [rowHeights]
  );

  return { rowHeights, handleMouseDown };
};

export default useResizableRows;

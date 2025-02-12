type Side = "left" | "right"

export function getFixedPosition(side: Side, index: number): { x: number; yLarge: number; ySmall: number } {
  const xLeft = index === 1 ? 20 : 10
  const xRight = index === 1 ? 80 : 90

  const x = side === "left" ? xLeft : xRight

  // Adjusted y positions to better frame the title
  const yPositionsLarge = [25, 50, 75]  // For larger screens
  const yPositionsSmall = [30, 50, 70]  // For smaller screens

  return {
    x,
    yLarge: yPositionsLarge[index],
    ySmall: yPositionsSmall[index],
  }
}


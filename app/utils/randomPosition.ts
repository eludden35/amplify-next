type Side = "left" | "right"

export function getFixedPosition(side: Side, index: number): { x: number; ySmall: number; yLarge: number } {
  const xLeft = index === 1 ? 10 : 15
  const xRight = index === 1 ? 90 : 85

  const x = side === "left" ? xLeft : xRight

  const yPositionsLarge = [25, 50, 75]
  const yPositionsSmall = [27, 40, 53]

  return {
    x,
    yLarge: yPositionsLarge[index],
    ySmall: yPositionsSmall[index],
  }
}


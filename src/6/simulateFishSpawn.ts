export function simulateFishSpawn({
  initialFishes,
  daysToSimulate,
  spawnRateDays,
  bornSpawnRateDays,
}: {
  initialFishes: number[]
  daysToSimulate: number
  spawnRateDays: number
  bornSpawnRateDays: number
}): number {
  const buckets = new Array(bornSpawnRateDays).fill(0)
  for (const initialFish of initialFishes) {
    buckets[initialFish] += 1
  }

  for (let day = 0; day < daysToSimulate; day++) {
    const currentIndex = day % bornSpawnRateDays
    buckets[(currentIndex + spawnRateDays) % bornSpawnRateDays] += buckets[currentIndex]
  }

  return buckets.reduce((sum, i) => sum + i, 0)
}

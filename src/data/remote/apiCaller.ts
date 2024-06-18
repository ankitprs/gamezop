async function getGames() {
  return (await fetch("https://pub.gamezop.com/v3/games?id=peSLSV")).json()
}

export { getGames }
function superbowlWin(array){
  let season = array.find(({result}) =>
    result === "W"
  )
  return season ? season.year : undefined
}

var app = getApp();

function addWinPrize(prize) {
  addGameData.winPrizes.push(prize);
}

function addLosePrize(prize) {
  addGameData.losePrize.push(prize);
}


Page({
  data: {

  },
  onLoad(query) {

  },
  pickGame() {
    my.navigateTo({
      url: "/pages/pick_game/pick_game"
    });
  },
  addPrize() {
    my.navigateTo({
      url: "pages/input_data/input_data"
    });
  }
})
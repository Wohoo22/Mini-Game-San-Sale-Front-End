var app = getApp();

function addWinPrize(prize) {
  app.addGameData.winPrizes.push(prize);
}

function addLosePrize(prize) {
  app.addGameData.losePrizes.push(prize);
}


Page({
  data: {
    winPrizes: app.addGameData.winPrizes,
    losePrizes: app.addGameData.losePrizes
  },
  onLoad(query) {
    app.initAddGameData();
    this.setData({
      winPrizes: app.addGameData.winPrizes,
      losePrizes: app.addGameData.losePrizes
    });
  },
  onShow() {
    if (app.inputDataData.isSubmitted) {
      if (app.inputDataData.meta == 'WIN')  {
        addWinPrize(app.inputDataData.text);
      } else {
        addLosePrize(app.inputDataData.text);
      }
      app.initInputDataData();
      this.setData({
        winPrizes: app.addGameData.winPrizes,
        losePrizes: app.addGameData.losePrizes
      });
    }
  },
  pickGame() {
    my.navigateTo({
      url: "/pages/pick_game/pick_game"
    });
  },
  addWinPrize() {
    my.navigateTo({
      url: "pages/input_data/input_data?meta=WIN"
    });
  },
  addLosePrize() {
    my.navigateTo({
      url: "pages/input_data/input_data?meta=LOSE"
    });
  }
})
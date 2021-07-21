var app = getApp();

function addWinPrize(prize) {
  if (prize != '')
    app.addGameData.winPrizes.push(prize);
}

function addLosePrize(prize) {
  if (prize != '')
    app.addGameData.losePrizes.push(prize);
}


Page({
  data: {
    winPrizes: app.addGameData.winPrizes,
    losePrizes: app.addGameData.losePrizes,
    miniGameName: app.addGameData.miniGame.name,
  },
  onLoad(query) {
    app.initAddGameData();
    app.pickGameData.miniGame.name = 'Chưa chọn game nào';
    this.setData({
      winPrizes: app.addGameData.winPrizes,
      losePrizes: app.addGameData.losePrizes,
      miniGameName: app.addGameData.miniGame.name,
    });
  },
  onShow() {
    if (app.pickGameData.isSubmitted) {
      app.addGameData.miniGame.id = app.pickGameData.miniGame.id;
      app.addGameData.miniGame.name = app.pickGameData.miniGame.name;
      this.setData({
        winPrizes: app.addGameData.winPrizes,
        losePrizes: app.addGameData.losePrizes,
        miniGameName: app.addGameData.miniGame.name,
      });
      app.initPickGameData();
    }
    if (app.inputDataData.isSubmitted) {
      if (app.inputDataData.meta == 'WIN')  {
        addWinPrize(app.inputDataData.text);
      } else {
        addLosePrize(app.inputDataData.text);
      }
      this.setData({
        winPrizes: app.addGameData.winPrizes,
        losePrizes: app.addGameData.losePrizes,
        miniGameName: app.addGameData.miniGame.name,
      });
      app.initInputDataData();
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
  },
  submit() {
    app.addGameData.isSummitted = true;

    try {
      getCurrentPages()[getCurrentPages().length-2].onShow();
    } catch(err) {
      console.log(err);
    }
    my.navigateBack();
  }
})
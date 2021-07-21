var app = getApp();

function addMiniGame(game) {
  app.createCampaignData.miniGames.push({
    id: game.id,
    name: game.name,
    isConfigured: false,
    winPrizes: game.winPrizes,
    losePrizes: game.losePrizes
  });
}

Page({
  data: {
    miniGames: app.createCampaignData.miniGames,
  },
  onLoad(query) {
    app.initAddGameData();
    app.initCreateCampaignData();

    this.setData({
      miniGames: app.createCampaignData.miniGames
    });
  },
  onShow() {
    if (app.addGameData.isSummitted && app.addGameData.miniGame.id !== '') {
      addMiniGame({
        id: app.addGameData.miniGame.id,
        name: app.addGameData.miniGame.name,
        winPrizes: app.addGameData.winPrizes,
        losePrizes: app.addGameData.losePrizes
      });
      this.setData({
        miniGames: app.createCampaignData.miniGames
      });
      app.initAddGameData();
    }
  },
  addGame() {
    my.navigateTo({
      url: '/pages/add_game/add_game'
    });
  },
  submit() {
    my.navigateBack();
  }
})
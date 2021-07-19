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


    addMiniGame({
      id: '1',
      name: 'Snake',
      winPrizes: [],
      losePrizes: []
    });
    addMiniGame({
      id: '2',
      name: 'Mario',
      winPrizes: [],
      losePrizes: []
    });

    this.setData({
      miniGames: app.createCampaignData.miniGames
    });
  },
  onShow() {
    if (app.addGameData.isSummitted) {
      addMiniGame({
        id: app.addGameData.miniGame.id,
        name: app.addGameData.miniGame.name,
        winPrizes: app.addGameData.winPrizes,
        losePrizes: app.addGameData.losePrizes
      });
      app.initAddGameData();
      this.setData({
        miniGames: app.createCampaignData.miniGames
      });
    }
  },
  addGame() {
    my.navigateTo({
      url: '/pages/add_game/add_game'
    });
  }
})
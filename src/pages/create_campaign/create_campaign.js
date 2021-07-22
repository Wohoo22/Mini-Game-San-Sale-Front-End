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
  async submit() {
    var createCampaignReq = {
      id: '',
      name: app.createCampaignData.name,
      expireAt: app.createCampaignData.expireAt === '' ? '2021-07-21T16:49:21.787Z' : app.createCampaignData.expireAt,
      playCount: 0,
      winCount: 0,
      loseCount: 0,
      miniGames: []
    };

    for (var game of app.createCampaignData.miniGames) {
      createCampaignReq.miniGames.push({
        id: game.id,
        uuid: '',
        winPrizes: game.winPrizes,
        losePrizes: game.losePrizes
      });
    }
    

    var createCampainResp = await app.httpPost(
      app.globalData.server + '/campaign', 
      createCampaignReq
    );
    app.httpPost(
      app.globalData.server + '/user/' + app.globalData.userId + '/add-campaign-ids',
      {
        ids: [
          createCampainResp.id
        ]
      }
    );

    my.navigateBack();
  },
  setName(e) {
    app.createCampaignData.name = e.detail.value;
  },
  setExpireAt(e) {
    app.createCampaignData.expireAt = e.detail.value;
  }
})
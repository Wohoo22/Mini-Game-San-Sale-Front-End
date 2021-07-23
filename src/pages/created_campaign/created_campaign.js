var app = getApp();

async function getData(id) {
  // fake data

  // app.createdCampaignData.playCnt = 150;
  // app.createdCampaignData.winCnt = 100;
  // app.createdCampaignData.loseCnt = 50;
  // app.createdCampaignData.miniGames = [];
  // app.createdCampaignData.miniGames.push({
  //   id: '1',
  //   name: 'Snake',
  //   isConfigured: true,
  //   winPrizes: ['GIAMGIA10k','FREESHIP100k'],
  //   losePrizes: ['GIAMGIA5K','FREESHIP500l'],
  // });
  //   app.createdCampaignData.miniGames.push({
  //   id: '2',
  //   name: 'Mario',
  //   isConfigured: false,
  //   winPrizes: ['GIAMGIA10k','FREESHIP100k'],
  //   losePrizes: ['GIAMGIA5K','FREESHIP500k'],
  // });

  // call api

  var campaignData = await app.httpPost(
    app.globalData.server + '/campaign/get',
    {
      ids: [id],
    }
  );
  campaignData = campaignData[0];

  app.createdCampaignData.name = campaignData.name;
  app.createdCampaignData.expireAt = campaignData.expireAt;
  app.createdCampaignData.playCnt = campaignData.playCount;
  app.createdCampaignData.winCnt = campaignData.winCount;
  app.createdCampaignData.loseCnt = campaignData.loseCount;

  var gameIds = [];
  for (var g of campaignData.miniGames) {
    gameIds.push(g.id);
  }

  var gameInfo = await app.httpPost(
    app.globalData.server + '/minigame/get',
    {
      ids: gameIds,
    }
  );

  for (var g of campaignData.miniGames) {
    var name = '';
    for (var mg of gameInfo) {
      if (g.id == mg.id) {
        name = mg.name;
        break;
      }
    }
    app.createdCampaignData.miniGames.push({
       id: g.id,
       uuid: g.uuid,
       name: name,
       winPrizes: g.winPrizes,
       losePrizes: g.losePrizes,
    });
  }
}

Page({
  data: {
    id: app.createdCampaignData.id,
    name: app.createdCampaignData.name,
    expireAt: app.createdCampaignData.expireAt,
    playCnt: app.createdCampaignData.playCnt,
    winCnt: app.createdCampaignData.winCnt,
    loseCnt: app.createdCampaignData.loseCnt,
    miniGames: app.createdCampaignData.miniGames
  },
  async onLoad() {
    app.initCreatedCampaignData();
    app.createdCampaignData.id = app.createdCampaignListData.chosenCampaignId;
    await getData(app.createdCampaignData.id);
    this.setData({
      id: app.createdCampaignData.id,
      name: app.createdCampaignData.name,
      expireAt: app.createdCampaignData.expireAt,
      playCnt: app.createdCampaignData.playCnt,
      winCnt: app.createdCampaignData.winCnt,
      loseCnt: app.createdCampaignData.loseCnt,
      miniGames: app.createdCampaignData.miniGames
    })
  },
  async deleteCampaign(e) {
    var campaignData = await app.httpPost(
      app.globalData.server + '/campaign/delete',
      {
        ids: [app.createdCampaignData.id],
      }
    );
    var lstPage = getCurrentPages()[getCurrentPages().length-2];
    my.navigateBack();
    try {
      lstPage.onShow();
    } catch(err) {
      console.log(err);
    }
  },
  goSetting(e) {
    var uuid = e.target.id;
    var gameId = '';
    for (var g of app.createdCampaignData.miniGames) {
      if (g.uuid == uuid) {
        gameId = g.id;
        break;
      }
    }
    var campaignId = app.createdCampaignData.id;

    var req = {
      appId: gameId,
      path: 'pages/index/index',
      extraData: {
        campaignId: campaignId,
        uuid: uuid,
        isUser: false,
      }
    };
    my.navigateToMiniApp({
      req,
      success() {
      },
      fail(err) {
      }
    });
  }
})
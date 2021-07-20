var app = getApp();

function getData() {
  // fake data
  app.createdCampaignData.useCnt = 150;
  app.createdCampaignData.winCnt = 100;
  app.createdCampaignData.loseCnt = 50;
  app.createdCampaignData.miniGames = [];
  app.createdCampaignData.miniGames.push({
    id: '1',
    name: 'Snake',
    isConfigured: true,
    winPrizes: ['GIAMGIA10k','FREESHIP100k'],
    losePrizes: ['GIAMGIA5K','FREESHIP500l'],
  });
    app.createdCampaignData.miniGames.push({
    id: '2',
    name: 'Mario',
    isConfigured: false,
    winPrizes: ['GIAMGIA10k','FREESHIP100k'],
    losePrizes: ['GIAMGIA5K','FREESHIP500k'],
  });

  // call api
}

Page({
  data: {
    id: app.createdCampaignData.id,
    useCnt: app.createdCampaignData.useCnt,
    winCnt: app.createdCampaignData.winCnt,
    loseCnt: app.createdCampaignData.loseCnt,
    miniGames: app.createdCampaignData.miniGames
  },
  onLoad() {
    app.createdCampaignData.id = app.createdCampaignListData.chosenCampaignId;
    getData();
    this.setData({
      id: app.createdCampaignData.id,
      useCnt: app.createdCampaignData.useCnt,
      winCnt: app.createdCampaignData.winCnt,
      loseCnt: app.createdCampaignData.loseCnt,
      miniGames: app.createdCampaignData.miniGames
    })
  }
})
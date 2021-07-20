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
    winPrizes: ['GIAMGIA10k','FREESHIP100k'],
    losePrizes: ['GIAMGIA5K','FREESHIP500l'],
  });

  // call api
}

Page({
  data: {
    useCnt: app.createdCampaignData.useCnt,
    winCnt: app.createdCampaignData.winCnt,
    loseCnt: app.createdCampaignData.loseCnt,
    miniGames: app.createdCampaignData.miniGames
  },
  onLoad() {
    getData();
  }
})
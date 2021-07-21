var app = getApp();

var processedData = {
  id: '',
  name: '',
  expireAt: '',
  playCnt: 0,
  winCnt: 0,
  loseCnt: 0,
  miniGames: [{
    id: '',
    uuid: '',
    name: '',
    likeCnt: 0,
    dislikeCnt: 0,
    categories: []
  }]
};

function getData() {
  // fake data
  processedData = {
    id: '19n3i1yhd03',
    name: 'Săn sale tháng 7',
    expireAt: '30/7/2021',
    playCnt: 145,
    winCnt: 100,
    loseCnt: 45,
    miniGames: [{
      id: '1234242342',
      uuid: '19327342383',
      name: 'Snake',
      thumbnail: 'https://cdn.tutsplus.com/mobile/uploads/legacy/Corona-SDK_Build-A-Snake-Game/2/1.png',
      likeCnt: 1293,
      dislikeCnt: 42,
      categories: ['Hanh Dong', 'Phieu Luu']
    },
    {
      id: '1234242342',
      uuid: '19327342383',
      name: 'Mario',
      thumbnail: 'https://pbs.twimg.com/media/Edlq-09UEAAbOVy.jpg',
      likeCnt: 1293,
      dislikeCnt: 42,
      categories: ['Hanh Dong', 'Phieu Luu']
    }]
  }
  // call api
  var campaignId = app.indexData.joinCampaignId;
}

Page({
  data: {
    processedData: processedData,
  },
  onLoad() {
    getData();
    this.setData({
      processedData: processedData,
    })
  }
})
var app = getApp();

var processedData = {
  name,
  expireAt,
  playCnt,
  winCnt,
  loseCnt,
  miniGames: [{
    id,
    uuid,
    name,
    likeCnt,
    dislikeCnt,
    categories: []
  }]
};

function getData() {
  // fake data
  processedData = {
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
}

Page({
  data: {
    data: processedData
  },
  onLoad() {
    getData();
    this.setData({
      data: processedData,
    })
  }
});
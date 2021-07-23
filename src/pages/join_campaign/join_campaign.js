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

async function getData() {

  // fake data

  // processedData = {
  //   id: '19n3i1yhd03',
  //   name: 'Săn sale tháng 7',
  //   expireAt: '30/7/2021',
  //   playCnt: 145,
  //   winCnt: 100,
  //   loseCnt: 45,
  //   miniGames: [{
  //     id: '1234242342',
  //     uuid: '19327342383',
  //     name: 'Snake',
  //     thumbnail: 'https://cdn.tutsplus.com/mobile/uploads/legacy/Corona-SDK_Build-A-Snake-Game/2/1.png',
  //     likeCnt: 1293,
  //     dislikeCnt: 42,
  //     categories: ['Hanh Dong', 'Phieu Luu']
  //   },
  //   {
  //     id: '1234242342',
  //     uuid: '19327342383',
  //     name: 'Mario',
  //     thumbnail: 'https://pbs.twimg.com/media/Edlq-09UEAAbOVy.jpg',
  //     likeCnt: 1293,
  //     dislikeCnt: 42,
  //     categories: ['Hanh Dong', 'Phieu Luu']
  //   }]
  // }


  // call api

  var campaignId = app.indexData.joinCampaignId;
  var campaignData = await app.httpPost(
  app.globalData.server + '/campaign/get',
    {
      ids: [campaignId],
    }
  );

  if (campaignData.length == 0) {
    my.navigateBack();
    return;
  }

  campaignData = campaignData[0];

  processedData = {
    id: campaignData.id,
    name: campaignData.name,
    expireAt: campaignData.expireAt,
    playCnt: campaignData.playCount,
    winCnt: campaignData.winCount,
    loseCnt: campaignData.loseCount,
    miniGames: []
  };

  var miniGameIds = [];
  for (var g of campaignData.miniGames) {
    miniGameIds.push(g.id);
  }

  var gameInfo = await app.httpPost(
  app.globalData.server + '/minigame/get',
    {
      ids: miniGameIds,
    }
  );

  for (var g of gameInfo) {
    var uuid = '';
    for (var mg of campaignData.miniGames) {
      if (mg.id == g.id) {
        uuid = mg.uuid;
        break;
      }
    }
    processedData.miniGames.push({
        id: g.id,
        uuid: uuid,
        name: g.name,
        thumbnail: g.thumbnail,
        useCnt: g.useCount,
        likeCnt: g.likeCount,
        dislikeCnt: g.dislikeCount,
        categories: g.categoryIds
    })
  }
}

Page({
  data: {
    processedData: processedData,
  },
 async onLoad() {
    await getData();
    this.setData({
      processedData: processedData,
    })
  },
  goPlay(e) {
    var uuid = e.target.id;
    var gameId = '';
    for (var g of processedData.miniGames) {
      if (g.uuid == uuid) {
        gameId = g.id;
        break;
      }
    }

    var campaignId = processedData.id;

    var req = {
      appId: gameId,
      path: 'pages/index/index',
      extraData: {
        campaignId: campaignId,
        uuid: uuid,
        isUser: true,
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
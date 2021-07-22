var app = getApp();

var runningCampaigns = [];
var endedCampaigns = [];


async function getData() {
  runningCampaigns = [];
  endedCampaigns = [];

  // fake data

  // runningCampaigns.push({
  //   id: '114433515252343254',
  //   name: 'Săn sale iphone 10'
  // });
  // endedCampaigns.push({
  //   id: '299684950376583845',
  //   name: 'Săn sale samsung note 20'
  // });


  // call api

  var campaigns = await app.httpPost(
    app.globalData.server + '/user/' + app.globalData.userId + '/get-campaign-ids',
    {}
  );

  var runningCampaignIds = campaigns.running;
  var endedCampaignIds = campaigns.ended;

  var runningCampaignObjs = await app.httpPost(
    app.globalData.server + '/campaign/get',
    {
      ids: runningCampaignIds,
    }
  );
  var endedCampaignObjs = await app.httpPost(
    app.globalData.server + '/campaign/get',
    {
      ids: endedCampaignIds,
    }
  );

  for (var o of runningCampaignObjs) {
    runningCampaigns.push({
      id: o.id,
      name: o.name,
    });
  }
  for (var o of endedCampaignObjs) {
    endedCampaigns.push({
      id: o.id,
      name: o.name,
    });
  }
}

Page({
  data : {
    runningCampaigns: runningCampaigns,
    endedCampaigns: endedCampaigns
  },
  async onShow() {
    await getData();
    this.setData({
      runningCampaigns: runningCampaigns,
      endedCampaigns: endedCampaigns
    });
  },
  createdCampaign(e) {
    app.createdCampaignListData.chosenCampaignId = e.target.id;
    my.navigateTo({
      url: '/pages/created_campaign/created_campaign'
    });
  }
})
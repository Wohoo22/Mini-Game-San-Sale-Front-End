var app = getApp();

var runningCampaigns = [];
var endedCampaigns = [];


function getData() {
  this.runningCampaigns = [];
  this.endedCampaigns = [];
  // fake data
  runningCampaigns.push({
    id: '1',
    name: 'Săn sale iphone 10'
  });
  endedCampaigns.push({
    id: '2',
    name: 'Săn sale samsung note 20'
  });

  // call api
}

Page({
  data : {
    runningCampaigns: runningCampaigns,
    endedCampaigns: endedCampaigns
  },
  onLoad() {
    getData();
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
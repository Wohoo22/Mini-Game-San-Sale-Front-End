var runningCampaigns = [];
var endedCampaigns = [];


// fake data
runningCampaigns.push({
  id: '1',
  name: 'Săn sale iphone 10'
});
endedCampaigns.push({
  id: '2',
  name: 'Săn sale samsung note 20'
});


Page({
  data : {
    runningCampaigns: runningCampaigns,
    endedCampaigns: endedCampaigns
  },
  createdCampaign() {
    my.navigateTo({
      url: '/pages/created_campaign/created_campaign'
    });
  }
})
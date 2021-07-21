var app = getApp();

function getCampaign(id) {
  // call api
  return {};
}

async function getUserId() {
  return '';
}

Page({
  async onLoad() {
    var userId = await getUserId();
    app.globalData.userId = userId;
  },
  onShow() {
    if (app.inputDataData.isSubmitted) {
      var id = app.inputDataData.text;
      var campaign = getCampaign(id);
      if (campaign != null) {
        app.indexData.joinCampaignId = id;
        my.navigateTo({
          url: "pages/join_campaign/join_campaign"
        });
      }
      app.initInputDataData();
    }
  },
  createCampaign() {
    my.navigateTo({
      url: '/pages/create_campaign/create_campaign'
    });
  },
  createdCampaignList() {
    my.navigateTo({
      url: '/pages/created_campaign_list/created_campaign_list'
    });
  },
  joinCampaign() {
    my.navigateTo({
      url: "pages/input_data/input_data"
    });
  }
});
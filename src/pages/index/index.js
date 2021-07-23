var app = getApp();

function getCampaign(id) {
  // call api
  return {};
}

async function getUserId() {
  app.globalData.userId = '60f966910c03195448845cc9';
  await my.getUserInfo({
      success: (res) => {
        var id = '';
        if (res.customerId) {
          app.globalData.userId = res.customerId;
        }
      },
      fail: (res) => {}
  });

  var res = await app.httpPost(
    app.globalData.server + '/user',
    {
      desiredId:  app.globalData.userId,
      email: '',
      prizes: [],
      campaignIds: [],
    }
  );
}

Page({
  async onLoad() {
    await getUserId();
    // app.globalData.userId = userId;
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
Page({
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
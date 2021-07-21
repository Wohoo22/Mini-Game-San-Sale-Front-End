// ____________ global
var globalData = {
  userId : '',
}


// ____________ index

var indexData = {
  joinCampaignId : '',
}


// ____________ create-campaign

var createCampaignData = {
  expireAt: '',
  name: '',
  miniGames: [
    {
      id: '',
      name: '',
      isConfigured: false,
      winPrizes: [''],
      losePrizes: ['']
    }
  ]
};


function initCreateCampaignData() {
  this.createCampaignData.expireAt = '';
  this.createCampaignData.name = '';
  this.createCampaignData.miniGames = [];
}


// ____________ add-game

var addGameData = {
  isSummitted: false,
  miniGame: {
    id:'',
    name:'',
  },
  winPrizes: [''],
  losePrizes: ['']
};

function initAddGameData() {
  this.addGameData.isSummitted = false;
  this.addGameData.miniGame.id = '';
  this.addGameData.miniGame.name = '';
  this.addGameData.winPrizes = [];
  this.addGameData.losePrizes = [];
}

// ____________ pick-game

var pickGameData = {
  isSubmitted: false,
  miniGame: {
      id: '',
      name: ''
  }
};

function initPickGameData() {
  this.pickGameData.isSubmitted = false;
  this.pickGameData.miniGame.id = '';
  this.pickGameData.miniGame.name = '';
}

// ____________ input-data

var inputDataData = {
  isSubmitted: false,
  text: '',
  meta: ''
};

function initInputDataData() {
  this.inputDataData.isSubmitted = false;
  this.inputDataData.text = '';
  this.inputDataData.meta = '';
}

// ____________ created-campaign-list
var createdCampaignListData = {
  chosenCampaignId: '',
};

// ____________ created-campaign
var createdCampaignData = {
  id: '',
  playCnt: 0,
  winCnt: 0,
  loseCnt: 0,
  miniGames: [
    {
      id: '',
      winPrizes: [],
      losePrizes: [],
    }
  ],
};


App({
  onLaunch(options) {
    // my.navigateTo({
    //   url:"pages/join_campaign/join_campaign"
    // });
  },
  onShow(options) {
  },

  // page data

  indexData: indexData,

  createCampaignData: createCampaignData,
  initCreateCampaignData: initCreateCampaignData,

  addGameData: addGameData,
  initAddGameData: initAddGameData,

  pickGameData: pickGameData,
  initPickGameData: initPickGameData,

  inputDataData: inputDataData,
  initInputDataData: initInputDataData,

  createdCampaignListData: createdCampaignListData,
  createdCampaignData: createdCampaignData
});
var app = getApp();

var miniGames = [
  {
    id:'1',
    name: 'Snake',
    thumbnail: 'https://cdn.tutsplus.com/mobile/uploads/legacy/Corona-SDK_Build-A-Snake-Game/2/1.png',
    useCnt: 189,
    likeCnt: 391,
    dislikeCnt: 43,
    categories: ['Hanh dong', 'Phieu luu']
  },
  {
    id:'2',
    name: 'Mario',
    thumbnail: 'https://pbs.twimg.com/media/Edlq-09UEAAbOVy.jpg',
    useCnt: 189,
    likeCnt: 391,
    dislikeCnt: 43,
    categories: ['Hanh dong', 'Phieu luu']
  }
];


Page({
  data: {
    miniGames: miniGames
  },
  onLoad(query) {
    app.initPickGameData();
  },
  submit(e) {
    var id = e.target.id;
    var name = '';
    for (var i=0; i<miniGames.length; i++) {
      if (miniGames[i].id === id) {
        name = miniGames[i].name;
        break;
      }
    }
    app.pickGameData.isSubmitted = true;
    app.pickGameData.miniGame.id = id;
    app.pickGameData.miniGame.name = name;

    var lstPage = getCurrentPages()[getCurrentPages().length-2];
    my.navigateBack();
    try {
      lstPage.onShow();
    } catch(err) {
      console.log(err);
    }
    app.initPickGameData();
  }
})
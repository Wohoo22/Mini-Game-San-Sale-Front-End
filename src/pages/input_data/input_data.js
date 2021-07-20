var app = getApp();

Page({
  onLoad(query) {
    app.initInputDataData();
    if (query.includes('=') && query.split('=').length >= 2)
      app.inputDataData.meta = query.split('=')[1];
  },
  props: {
    inputData: ''
  },
  submit() {
    app.inputDataData.isSubmitted = true;
    app.inputDataData.text = this.props.inputData;

    var lstPage = getCurrentPages()[getCurrentPages().length-2];
    my.navigateBack();
    try {
      lstPage.onShow();
    } catch(err) {
      console.log(err);
    }
  },
  getInput(e) {
    this.props.inputData = e.detail.value;
  }
})
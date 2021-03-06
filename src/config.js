const optionsMap = {
  type: 'type',
  id: 'id',
  width: 'width',
  height: 'height',
  dataFormat: 'dataFormat',
  dataSource: 'dataSource',
  events: 'events',
  link: 'link',
  showDataLoadingMessage: 'showDataLoadingMessage',
  showChartLoadingMessage: 'showChartLoadingMessage',
  baseChartMessageFont: 'baseChartMessageFont',
  baseChartMessageFontSize: 'baseChartMessageFontSize',
  baseChartMessageColor: 'baseChartMessageColor',
  dataLoadStartMessage: 'dataLoadStartMessage',
  dataLoadErrorMessage: 'dataLoadErrorMessage',
  dataInvalidMessage: 'dataInvalidMessage',
  dataEmptyMessage: 'dataEmptyMessage',
  typeNotSupportedMessage: 'typeNotSupportedMessage',
  loadMessage: 'loadMessage',
  renderErrorMessage: 'renderErrorMessage',
  containerBackgroundColor: 'containerBackgroundColor',
  containerBackgroundOpacity: 'containerBackgroundOpacity',
  containerClassName: 'containerClassName',
  baseChartMessageImageHAlign: 'baseChartMessageImageHAlign',
  baseChartMessageImageVAlign: 'baseChartMessageImageVAlign',
  baseChartMessageImageAlpha: 'baseChartMessageImageAlpha',
  baseChartMessageImageScale: 'baseChartMessageImageScale',
  typeNotSupportedMessageImageHAlign: 'typeNotSupportedMessageImageHAlign',
  typeNotSupportedMessageImageVAlign: 'typeNotSupportedMessageImageVAlign',
  typeNotSupportedMessageImageAlpha: 'typeNotSupportedMessageImageAlpha',
  typeNotSupportedMessageImageScale: 'typeNotSupportedMessageImageScale',
  dataLoadErrorMessageImageHAlign: 'dataLoadErrorMessageImageHAlign',
  dataLoadErrorMessageImageVAlign: 'dataLoadErrorMessageImageVAlign',
  dataLoadErrorMessageImageAlpha: 'dataLoadErrorMessageImageAlpha',
  dataLoadErrorMessageImageScale: 'dataLoadErrorMessageImageScale',
  dataLoadStartMessageImageHAlign: 'dataLoadStartMessageImageHAlign',
  dataLoadStartMessageImageVAlign: 'dataLoadStartMessageImageVAlign',
  dataLoadStartMessageImageAlpha: 'dataLoadStartMessageImageAlpha',
  dataLoadStartMessageImageScale: 'dataLoadStartMessageImageScale',
  dataInvalidMessageImageHAlign: 'dataInvalidMessageImageHAlign',
  dataInvalidMessageImageVAlign: 'dataInvalidMessageImageVAlign',
  dataInvalidMessageImageAlpha: 'dataInvalidMessageImageAlpha',
  dataInvalidMessageImageScale: 'dataInvalidMessageImageScale',
  dataEmptyMessageImageHAlign: 'dataEmptyMessageImageHAlign',
  dataEmptyMessageImageVAlign: 'dataEmptyMessageImageVAlign',
  dataEmptyMessageImageAlpha: 'dataEmptyMessageImageAlpha',
  dataEmptyMessageImageScale: 'dataEmptyMessageImageScale',
  renderErrorMessageImageHAlign: 'renderErrorMessageImageHAlign',
  renderErrorMessageImageVAlign: 'renderErrorMessageImageVAlign',
  renderErrorMessageImageAlpha: 'renderErrorMessageImageAlpha',
  renderErrorMessageImageScale: 'renderErrorMessageImageScale',
  loadMessageImageHAlign: 'loadMessageImageHAlign',
  loadMessageImageVAlign: 'loadMessageImageVAlign',
  loadMessageImageAlpha: 'loadMessageImageAlpha',
  loadMessageImageScale: 'loadMessageImageScale',
  ///////////////////////////////////////////////////////
  dataformat: 'dataFormat',
  datasource: 'dataSource',
  showdataloadingmessage: 'showDataLoadingMessage',
  showchartloadingmessage: 'showChartLoadingMessage',
  basechartmessagefont: 'baseChartMessageFont',
  basechartmessagefontsize: 'baseChartMessageFontSize',
  basechartmessagecolor: 'baseChartMessageColor',
  dataloadstartmessage: 'dataLoadStartMessage',
  dataloaderrormessage: 'dataLoadErrorMessage',
  datainvalidmessage: 'dataInvalidMessage',
  dataemptymessage: 'dataEmptyMessage',
  typenotsupportedmessage: 'typeNotSupportedMessage',
  loadmessage: 'loadMessage',
  rendererrormessage: 'renderErrorMessage',
  containerbackgroundcolor: 'containerBackgroundColor',
  containerbackgroundopacity: 'containerBackgroundOpacity',
  containerclassname: 'containerClassName',
  basechartmessageimagehalign: 'baseChartMessageImageHAlign',
  basechartmessageimagevalign: 'baseChartMessageImageVAlign',
  basechartmessageimagealpha: 'baseChartMessageImageAlpha',
  basechartmessageimagescale: 'baseChartMessageImageScale',
  typenotsupportedmessageimagehalign: 'typeNotSupportedMessageImageHAlign',
  typenotsupportedmessageimagevalign: 'typeNotSupportedMessageImageVAlign',
  typenotsupportedmessageimagealpha: 'typeNotSupportedMessageImageAlpha',
  typenotsupportedmessageimagescale: 'typeNotSupportedMessageImageScale',
  dataloaderrormessageimagehalign: 'dataLoadErrorMessageImageHAlign',
  dataloaderrormessageimagevalign: 'dataLoadErrorMessageImageVAlign',
  dataloaderrormessageimagealpha: 'dataLoadErrorMessageImageAlpha',
  dataloaderrormessageimagescale: 'dataLoadErrorMessageImageScale',
  dataloadstartmessageimagehalign: 'dataLoadStartMessageImageHAlign',
  dataloadstartmessageimagevalign: 'dataLoadStartMessageImageVAlign',
  dataloadstartmessageimagealpha: 'dataLoadStartMessageImageAlpha',
  dataloadstartmessageimagescale: 'dataLoadStartMessageImageScale',
  datainvalidmessageimagehalign: 'dataInvalidMessageImageHAlign',
  datainvalidmessageimagevalign: 'dataInvalidMessageImageVAlign',
  datainvalidmessageimagealpha: 'dataInvalidMessageImageAlpha',
  datainvalidmessageimagescale: 'dataInvalidMessageImageScale',
  dataemptymessageimagehalign: 'dataEmptyMessageImageHAlign',
  dataemptymessageimagevalign: 'dataEmptyMessageImageVAlign',
  dataemptymessageimagealpha: 'dataEmptyMessageImageAlpha',
  dataemptymessageimagescale: 'dataEmptyMessageImageScale',
  rendererrormessageimagehalign: 'renderErrorMessageImageHAlign',
  rendererrormessageimagevalign: 'renderErrorMessageImageVAlign',
  rendererrormessageimagealpha: 'renderErrorMessageImageAlpha',
  rendererrormessageimagescale: 'renderErrorMessageImageScale',
  loadmessageimagehalign: 'loadMessageImageHAlign',
  loadmessageimagevalign: 'loadMessageImageVAlign',
  loadmessageimagealpha: 'loadMessageImageAlpha',
  loadmessageimagescale: 'loadMessageImageScale'
};

const props = {
  options: Object,
  type: String,
  id: String,
  width: '',
  height: '',
  dataFormat: String,
  dataSource: '',
  events: Object,
  link: Object,
  showDataLoadingMessage: Boolean,
  showChartLoadingMessage: Boolean,
  baseChartMessageFont: String,
  baseChartMessageFontSize: String,
  baseChartMessageColor: String,
  dataLoadStartMessage: String,
  dataLoadErrorMessage: String,
  dataInvalidMessage: String,
  dataEmptyMessage: String,
  typeNotSupportedMessage: String,
  loadMessage: String,
  renderErrorMessage: String,
  containerBackgroundColor: String,
  containerBackgroundOpacity: Number,
  containerClassName: String,
  baseChartMessageImageHAlign: String,
  baseChartMessageImageVAlign: String,
  baseChartMessageImageAlpha: Number,
  baseChartMessageImageScale: Number,
  typeNotSupportedMessageImageHAlign: String,
  typeNotSupportedMessageImageVAlign: String,
  typeNotSupportedMessageImageAlpha: Number,
  typeNotSupportedMessageImageScale: Number,
  dataLoadErrorMessageImageHAlign: String,
  dataLoadErrorMessageImageVAlign: String,
  dataLoadErrorMessageImageAlpha: Number,
  dataLoadErrorMessageImageScale: Number,
  dataLoadStartMessageImageHAlign: String,
  dataLoadStartMessageImageVAlign: String,
  dataLoadStartMessageImageAlpha: Number,
  dataLoadStartMessageImageScale: Number,
  dataInvalidMessageImageHAlign: String,
  dataInvalidMessageImageVAlign: String,
  dataInvalidMessageImageAlpha: Number,
  dataInvalidMessageImageScale: Number,
  dataEmptyMessageImageHAlign: String,
  dataEmptyMessageImageVAlign: String,
  dataEmptyMessageImageAlpha: Number,
  dataEmptyMessageImageScale: Number,
  renderErrorMessageImageHAlign: String,
  renderErrorMessageImageVAlign: String,
  renderErrorMessageImageAlpha: Number,
  renderErrorMessageImageScale: Number,
  loadMessageImageHAlign: String,
  loadMessageImageVAlign: String,
  loadMessageImageAlpha: Number,
  loadMessageImageScale: Number,
  ///////////////////////////////////////////////
  dataformat: String,
  datasource: '',
  showdataloadingmessage: Boolean,
  showchartloadingmessage: Boolean,
  basechartmessagefont: String,
  basechartmessagefontsize: String,
  basechartmessagecolor: String,
  dataloadstartmessage: String,
  dataloaderrormessage: String,
  datainvalidmessage: String,
  dataemptymessage: String,
  typenotsupportedmessage: String,
  loadmessage: String,
  rendererrormessage: String,
  containerbackgroundcolor: String,
  containerbackgroundopacity: Number,
  containerclassname: String,
  basechartmessageimagehalign: String,
  basechartmessageimagevalign: String,
  basechartmessageimagealpha: Number,
  basechartmessageimagescale: Number,
  typenotsupportedmessageimagehalign: String,
  typenotsupportedmessageimagevalign: String,
  typenotsupportedmessageimagealpha: Number,
  typenotsupportedmessageimagescale: Number,
  dataloaderrormessageimagehalign: String,
  dataloaderrormessageimagevalign: String,
  dataloaderrormessageimagealpha: Number,
  dataloaderrormessageimagescale: Number,
  dataloadstartmessageimagehalign: String,
  dataloadstartmessageimagevalign: String,
  dataloadstartmessageimagealpha: Number,
  dataloadstartmessageimagescale: Number,
  datainvalidmessageimagehalign: String,
  datainvalidmessageimagevalign: String,
  datainvalidmessageimagealpha: Number,
  datainvalidmessageimagescale: Number,
  dataemptymessageimagehalign: String,
  dataemptymessageimagevalign: String,
  dataemptymessageimagealpha: Number,
  dataemptymessageimagescale: Number,
  rendererrormessageimagehalign: String,
  rendererrormessageimagevalign: String,
  rendererrormessageimagealpha: Number,
  rendererrormessageimagescale: Number,
  loadmessageimagehalign: String,
  loadmessageimagevalign: String,
  loadmessageimagealpha: Number,
  loadmessageimagescale: Number
};

module.exports = { optionsMap, props };

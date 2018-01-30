var messageList = [

  { "Message": "Hello React" },

  { "Message": "Hello Webpack" },

  { "Message": "Hello Nodejs" },

  { "Message": "Hello Express" }

];

exports.getMessageList = function (callback) {
  callback(messageList);
};
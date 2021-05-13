export default function sillyStringPlugin(app) {
  app.addHelper('sillyString', sillyString);
}

function sillyString(ctx) {
  let strArr = [];
  const sillyStrings = _sillyStringArray();
  for (var i = 0; i < 3; i++) {
    strArr.push(sillyStrings[Math.floor(Math.random() * 9)]);
  }

  return strArr.join(' ') ;
}

function _sillyStringArray() {
  return [
    'beepbop',
    'bippidy',
    'dynamo',
    'camelcassidy',
    'malarkey',
    'bibbi',
    'svonicki',
    'do it',
    'dont'
  ];
}
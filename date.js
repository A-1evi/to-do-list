module.exports.getDate = getDate;
function getDate() {
  var today = new Date();
  var option ={weekday:"long",
  month:"long",
  day:"numeric"};
  let day = today.toLocaleDateString("en-US", option)
  return day
}
module.exports.getDay = getDay;
function getDay() {
  var today = new Date();
  var option ={weekday:"long"};
  let day = today.toLocaleDateString("en-US", option)
  return day
}

function compareTime(dateString1, dateString2) {
  const dateTime1 = new Date(dateString1);
  const dateTime2 = new Date(dateString2);

  return dateTime1.getTime() > dateTime2.getTime();
}

module.exports = {
  compareTime,
};

export class Util {
  static truncate(text) {
    let result = text;
    if (text && text.length > 40) result = `${text.substr(0, 60)}...`;

    return result;
  }

  static objToArray(obj) {
    let keys = Object.keys(obj);

    return keys.map(id => ({
      ...obj[id],
      id
    }));
  }

  static Date() {
    let today = new Date(),
      dd = today.getDate(),
      mm = today.getMonth() + 1,
      yyyy = today.getFullYear();

    if (dd < 10) dd = "0" + dd;
    if (mm < 10) mm = "0" + mm;

    return `${dd}/${mm}/${yyyy}`;
  }

  static createID() {
    var PUSH_CHARS =
      "-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";

    var lastPushTime = 0;

    var lastRandChars = [];

    return (function() {
      var now = new Date().getTime();
      var duplicateTime = now === lastPushTime;
      lastPushTime = now;

      var timeStampChars = new Array(8);
      for (var i = 7; i >= 0; i--) {
        timeStampChars[i] = PUSH_CHARS.charAt(now % 64);
        now = Math.floor(now / 64);
      }
      if (now !== 0)
        throw new Error("We should have converted the entire timestamp.");

      var id = timeStampChars.join("");

      if (!duplicateTime) {
        for (i = 0; i < 12; i++) {
          lastRandChars[i] = Math.floor(Math.random() * 64);
        }
      } else {
        for (i = 11; i >= 0 && lastRandChars[i] === 63; i--) {
          lastRandChars[i] = 0;
        }
        lastRandChars[i]++;
      }
      for (i = 0; i < 12; i++) {
        id += PUSH_CHARS.charAt(lastRandChars[i]);
      }
      if (id.length !== 20) throw new Error("Length should be 20.");

      return id;
    })();
  }

  static arrayToObj(array) {
    let result = {};

    array.map(e => {
      let { id, ...data } = e;
      return (result[id] = data);
    });

    return result;
  }

  static idbToSate(array) {
    let result = {};

    array.map(e => {
      let { id, ...other } = e;
      return (result[id] = { ...other });
    });

    return result;
  }
}

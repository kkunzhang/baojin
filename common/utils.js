function formatTime(time) {
  if (typeof time !== 'number' || time < 0) {
    return time;
  }

  var hour = parseInt(time / 3600);
  time = time % 3600;
  var minute = parseInt(time / 60);
  time = time % 60;
  var second = time;

  return [hour, minute, second]
    .map(function (n) {
      n = n.toString();
      return n[1] ? n : '0' + n;
    })
    .join(':');
}

function formatLocation(longitude, latitude) {
  if (typeof longitude === 'string' && typeof latitude === 'string') {
    longitude = parseFloat(longitude);
    latitude = parseFloat(latitude);
  }

  longitude = longitude.toFixed(2);
  latitude = latitude.toFixed(2);

  return {
    longitude: longitude.toString().split('.'),
    latitude: latitude.toString().split('.'),
  };
}
var dateUtils = {
  UNITS: {
    年: 31557600000,
    月: 2629800000,
    天: 86400000,
    小时: 3600000,
    分钟: 60000,
    秒: 1000,
  },
  humanize: function (milliseconds) {
    var humanize = '';
    for (var key in this.UNITS) {
      if (milliseconds >= this.UNITS[key]) {
        humanize = Math.floor(milliseconds / this.UNITS[key]) + key + '前';
        break;
      }
    }
    return humanize || '刚刚';
  },
  format: function (dateStr) {
    var date = this.parse(dateStr);
    var diff = Date.now() - date.getTime();
    if (diff < this.UNITS['天']) {
      return this.humanize(diff);
    }
    var _format = function (number) {
      return number < 10 ? '0' + number : number;
    };
    return (
      date.getFullYear() +
      '/' +
      _format(date.getMonth() + 1) +
      '/' +
      _format(date.getDate()) +
      '-' +
      _format(date.getHours()) +
      ':' +
      _format(date.getMinutes())
    );
  },
  parse: function (str) {
    //将"yyyy-mm-dd HH:MM:ss"格式的字符串，转化为一个Date对象
    var a = str.split(/[^0-9]/);
    return new Date(a[0], a[1] - 1, a[2], a[3], a[4], a[5]);
  },
};
function GetDate(format, num = '') {
  /**
   * format=1表示获取年月日
   * format=0表示获取年月日时分秒
   * **/
  var now = new Date();
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate() + num;
  var day = now.getDay(); //得到周几
  var hour = now.getHours(); //得到小时
  var minu = now.getMinutes(); //得到分钟
  var sec = now.getSeconds(); //得到秒
  var _time = '';
  if (format == 1) {
    _time = year + '-' + month + '-' + date;
  } else if (format == 2) {
    _time =
      year + '-' + month + '-' + date + ' ' + hour + ':' + minu + ':' + sec;
  }
  return _time;
}
const BASE_URL = 'http://localhost:8082';
const myRequest = (options) => {
  return new Promise((resolve, reject) => {
    uni.request({
      url: BASE_URL + options.url,
      method: options.method || 'GET',
      data: options.data || {},
      success: (res) => {
        if (res.data.status !== 0) {
          return uni.showToast({
            title: '获取数据失败',
          });
        }
        resolve(res);
      },
      fail: (err) => {
        uni.showToast({
          title: '请求接口失败',
        });
        reject(err);
      },
    });
  });
};
/**
 *调转页面
 * @param url 调转页面url
 * @returns {string}
 */
export function toPage(url) {
  uni.navigateTo({
    url,
  });
}
export { formatTime, formatLocation, dateUtils, myRequest, GetDate };

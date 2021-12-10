/**
 * 时间戳转指定格式时间
 * @param {string} 时间分隔符,如':'
 * @param {num} 时间戳
 * @param {string} 格式:hms,有h返回小时,有m返回时间,有s返回秒
 */
const timestampFormat = (t, f, format) => {
  var jsdate = t ? new Date(t * 1000) : new Date();
  var pad = function (n, c) {
    if ((n = n + '').length < c) {
      return new Array(++c - n.length).join('0') + n;
    } else {
      return n;
    }
  };
  var hours = pad(jsdate.getHours(), 2);
  var mins = pad(jsdate.getMinutes(), 2);
  var secs = pad(jsdate.getSeconds(), 2);
  switch (format) {
    case 'hms':
      return hours + f + mins + f + secs;
    case 'hm':
      return hours + f + mins;
    case 'ms':
      return parseInt(hours) * 60 + parseInt(mins) + f + secs;
  }
};
/**
 * 返回各种格式时间
 * @param date：DateTime对象
 * @param fmt   时间格式
 * @returns {}格式化后的时间字符串
 */
const formatDate = (date, fmt) => {
  var date = new Date(parseInt(date) * 1000);
  if (fmt == 'yyMMddhhmmss') {
    var nYear = date.getFullYear(),
      nMonth = date.getMonth() + 1,
      nDay = date.getDate(),
      nHours = date.getHours(), //小时
      nMinutes = date.getMinutes(), //分
      nSeconds = date.getSeconds();

    nMonth = (nMonth < 10 ? '0' + nMonth : nMonth).toString();
    nDay = (nDay < 10 ? '0' + nDay : nDay).toString();
    nHours = (nHours < 10 ? '0' + nHours : nHours).toString();
    nMinutes = (nMinutes < 10 ? '0' + nMinutes : nMinutes).toString();

    //return nYear + nMonth + nDay + nHours + nMinutes;
    return nYear + nMonth + nDay + '_' + nHours + nMinutes;
  } else if (fmt == 'yyyyMMdd_hhmm') {
    var nYear = date.getFullYear(),
      nMonth = date.getMonth() + 1,
      nDay = date.getDate(),
      nHours = date.getHours(), //小时
      nMinutes = date.getMinutes(), //分
      nSeconds = date.getSeconds();

    nMonth = (nMonth < 10 ? '0' + nMonth : nMonth).toString();
    nDay = (nDay < 10 ? '0' + nDay : nDay).toString();
    nHours = (nHours < 10 ? '0' + nHours : nHours).toString();
    nMinutes = (nMinutes < 10 ? '0' + nMinutes : nMinutes).toString();

    return nYear + nMonth + nDay + '_' + nHours + nMinutes;
  } else {
    var o = {
      'M+': date.getMonth() + 1, //月份
      'd+': date.getDate(), //日
      'h+': date.getHours(), //小时
      'm+': date.getMinutes(), //分
      's+': date.getSeconds(), //秒
      'q+': Math.floor((date.getMonth() + 3) / 3), //季度
      S: date.getMilliseconds(), //毫秒
    };

    if (/(y+)/.test(fmt)) {
      fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length)
      );
    }

    for (var k in o) {
      if (new RegExp('(' + k + ')').test(fmt)) {
        fmt = fmt.replace(
          RegExp.$1,
          RegExp.$1.length == 1
            ? o[k]
            : ('00' + o[k]).substr(('' + o[k]).length)
        );
      }
    }
    return fmt;
  }
};

const padLeftZero = (str) => {
  return ('00' + str).substr(str.length);
};

/**
 * 金额格式化
 */
const numberFormat = (
  originalNumber,
  decimals,
  decPoint,
  thousandsSep,
  isNumber
) => {
  if (originalNumber !== null && originalNumber !== undefined) {
    // 非数字、科学计数法过滤
    const number = `${originalNumber}`.replace(/[^0-9+\-Ee.]/g, '');
    if (isNumber) {
      const number = originalNumber;
    }
    const n = !Number.isFinite(Number(number)) ? 0 : Number(number);
    const prec = !Number.isFinite(Number(decimals)) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSep === 'undefined' ? ',' : thousandsSep;
    const dec = typeof decPoint === 'undefined' ? '.' : decPoint;
    let s = '';

    const toFixedFix = function toFixedFix(nFix, precFix) {
      const k = Math.pow(10, precFix);

      return `${(Math.round(nFix * k) / k).toFixed(precFix)}`;
    };

    s = (prec ? toFixedFix(n, prec) : `${Math.round(n)}`).split('.');

    if (s[0].length > 3) {
      s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
    }

    if ((s[1] || '').length < prec) {
      s[1] = s[1] || '';
      s[1] += new Array(prec - s[1].length + 1).join('0');
    }
    return s.join(dec);
  }
};
/**
 * 返回 文件大小
 * @param size
 * @returns {string}
 */
const fileSize = (size) => {
  let unit = Number(size) / 1024 >= 1 ? 'M' : 'kb';
  return (Number(size) / 1024).toFixed(2) + unit;
};

export default {
  timestampFormat,
  formatDate,
  numberFormat,
  fileSize,
};

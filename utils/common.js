// 获取链接参数
export const parseUrl=(url=location.href)=>{
  const params=url.split('?')[1].split('&'); const res={};
  if (params&&params.length) {
    params.forEach((_)=>{
      res[_.split('=')[0]]=_.split('=')[1];
    });
  }
  return res;
};
// 获取当前时间
export const curentTime=()=>{
  const now = new Date();
  const year = now.getFullYear(); // 年
  const month = now.getMonth() + 1; // 月
  const day = now.getDate();
  const hh = now.getHours(); // 时
  const mm = now.getMinutes(); // 分
  let clock = year + '-';
  if (month < 10) clock += '0';
  clock += month + '-';
  if (day < 10) clock += '0';
  clock += day + ' ';
  if (hh < 10) clock += '0';
  clock += hh + ':';
  if (mm < 10) clock += '0';
  clock += mm;
  return (clock);
};
export const dateFormat = (date, fmt='yyyy-MM-dd hh:mm:ss')=>{
  date=new Date(date);
  const o = {
    'M+': date.getMonth() + 1, // 月份
    'd+': date.getDate(), // 日
    'h+': date.getHours(), // 小时
    'm+': date.getMinutes(), // 分
    's+': date.getSeconds(), // 秒
    'q+': Math.floor((date.getMonth() + 3) / 3), // 季度
    'S': date.getMilliseconds(), // 毫秒
  };
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(
        RegExp.$1,
        (date.getFullYear() + '').substr(4 - RegExp.$1.length),
    );
  }
  for (const k in o) {
    if (new RegExp('(' + k + ')').test(fmt)) {
      fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) :
                (('00' +
                    o[k]).substr(('' + o[k]).length)));
    }
  }
  return fmt;
};

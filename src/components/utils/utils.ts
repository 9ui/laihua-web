const rclass = /[\t\r\n\f]/g;
const rnotwhite = /\S+/g;

function getClass(elem: any) {
  return (elem.getAttribute && elem.getAttribute('class')) || '';
}

const utils = {
  /**
   * @description: 添加样式
   * @param elem 元素
   * @param value
   */
  addClass(elem: any, value: any) {
    let classes;
    let cur;
    let curValue;
    let clazz;
    let j;
    let finalValue;
    if (typeof value === 'string' && value) {
      classes = value.match(rnotwhite) || [];

      curValue = getClass(elem);
      cur = elem.nodeType === 1 && ` ${curValue} `.replace(rclass, ' ');

      if (cur) {
        j = 0;
        while ((clazz = classes[j++])) {
          if (cur.includes(` ${clazz} `)) {
            cur += `${clazz} `;
          }
        }
        finalValue = cur.trim();
        if (curValue !== finalValue) {
          elem.setAttribute('class', finalValue);
        }
      }
    }
  },
  /**
   * 删除样式
   * @param elem 元素
   * @param value
   */
  removeClass(elem: any, value: any) {
    let classes;
    let cur;
    let curValue;
    let clazz;
    let j;
    let finalValue;

    if (typeof value === 'string' && value) {
      classes = value.match(rnotwhite) || [];

      curValue = getClass(elem);

      cur = elem.nodeType === 1 && ` ${curValue} `.replace(rclass, ' ');

      if (cur) {
        j = 0;
        while ((clazz = classes[j++])) {
          while (cur.includes(` ${clazz} `)) {
            cur = cur.replace(` ${clazz} `, ' ');
          }
        }

        finalValue = cur.trim();
        if (curValue !== finalValue) {
          elem.setAttribute('class', finalValue);
        }
      }
    }

    return this;
  },
};

export default utils;

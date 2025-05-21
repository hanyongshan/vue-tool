import Dayjs from 'dayjs';
/**
 * 最高层级有效窗口对象
 * */
const windowTop = () => {
    return window.top === undefined || window.top === null || window.top.vm === undefined || window.top.vm === null ? window : window.top;
};

/**
 * 格式化日期
 * YYYY-MM-DD HH:mm:ss
 * num为多少unit之前，和unit共同使用，如：多少天之前，unit：months、days、years
 * */
const formatDate = (date, format, num, unit) => {
    if (date === undefined || date === null || date === '' || format === undefined || format === null) {
        return '';
    }
    let moment = Dayjs(date);
    if (num !== undefined && num !== null && num !== '' && unit !== undefined && unit !== null && unit !== '') {
        moment = moment.subtract(num, unit);
    }
    return moment.format(format);
};

/**
 * 节流
 * */
let throttleTimeout = null;
let throttleFlag = null;
const throttle = (func, wait = 500, immediate = true) => {
    if (immediate) {
        if (throttleFlag) return;
        throttleFlag = true;

        // 如果是立即执行，则在wait毫秒内开始时执行
        typeof func === 'function' && func();

        // 清除定时器
        if (throttleTimeout) {
            clearTimeout(throttleTimeout);
            throttleTimeout = null;
        }
        throttleTimeout = setTimeout(() => (throttleFlag = false), wait);
        return;
    }

    if (!throttleFlag) {
        throttleFlag = true;

        // 清除定时器
        if (throttleTimeout) {
            clearTimeout(throttleTimeout);
            throttleTimeout = null;
        }

        // 如果是非立即执行，则在wait毫秒内的结束处执行
        throttleTimeout = setTimeout(() => {
            throttleFlag = false;
            typeof func === 'function' && func();
        }, wait);
    }
};

/**
 * 防抖
 * */
let debounceTimeout = null;
const debounce = (func, wait = 500, immediate = false) => {
    // 清除定时器
    if (debounceTimeout !== null) {
        clearTimeout(debounceTimeout);
        debounceTimeout = null;
    }

    // 立即执行，此类情况一般用不到
    if (immediate) {
        const callNow = !debounceTimeout;
        debounceTimeout = setTimeout(() => (debounceTimeout = null), wait);
        if (callNow) typeof func === 'function' && func();
        return;
    }

    // 设置定时器，当最后一次操作后，timeout不会再被清除，所以在延时wait毫秒后执行func回调方法
    debounceTimeout = setTimeout(() => {
        typeof func === 'function' && func();
    }, wait);
};

/**
 * 复制
 * */
const copy = (text, ifNotice = true) => {
    const input = document.createElement('input');
    input.value = text;
    document.body.appendChild(input);
    input.select();
    document.execCommand('Copy');
    if (ifNotice) message(`复制成功`, 'success');
    input.remove();
};

/**
 * 中间提示信息
 * */
let messagePromise = Promise.resolve();
const message = (content, type) => {
    const contents = content.split('$@$');
    for (let i = 0, length = contents.length; i < length; i++) {
        (function (i) {
            messagePromise = messagePromise.then(windowTop().vm.$nextTick).then(() => {
                windowTop().vm.$message({
                    message: contents[i],
                    customClass: `ms-message-${type}`,
                    iconClass: `iconfont ${type === 'success' ? 'icon_td-msgsuccess-F' : type === 'warning' ? 'icon_td-msgwarn-F' : type === 'info' ? 'icon_td-msgnor-F' : 'icon_td-msgerror-F'}`,
                    duration: type === 'success' || contents[i] === '网络连接失败' ? 1400 : 5400,
                });
            });
        })(i);
    }
};

export default { formatDate, throttle, debounce, copy };

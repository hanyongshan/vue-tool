import Dayjs from 'dayjs'

/**
 * 尽量使用下面的$msValidate.number方法
 * 输入框input强制只能输入非负整数
 * @input="$msValidate.nonnegativeInteger($data, 'input')"
 * @input="$msValidate.nonnegativeInteger($data['msForm'], 'input')"
 * */
const nonnegativeInteger = (data, field) => {
  if (field === undefined || field === null || field === '') return ''
  data[field] = data[field].replace(/[^0-9]/gi, '').replace(/[0-9]/gi, (a, b, c) => {
    if (b === 0) return a
    if (c.indexOf('0') === 0) return ''
    return a
  })
}

/**
 * 尽量使用下面的$msValidate.number方法
 * 输入框input强制只能输入正整数
 * @input="$msValidate.positiveInteger($data, 'input')"
 * @input="$msValidate.positiveInteger($data['msForm'], 'input')"
 * */
const positiveInteger = (data, field) => {
  if (field === undefined || field === null || field === '') return ''
  data[field] = data[field].replace(/[^0-9]/gi, '').replace(/[0-9]/gi, (a, b, c) => {
    if (c.indexOf('0') === 0) return ''
    return a
  })
}

/**
 * 尽量使用下面的$msValidate.number方法
 * 输入框input强制只能输入非负小数
 * numbers：整数位数，undefiend和-1表示不限制
 * digits：小数位数，undefiend和-1表示不限制
 * @input="$msValidate.nonnegativeDouble($data, 'input')"
 * @input="$msValidate.nonnegativeDouble($data['msForm'], 'input')"
 * @input="$msValidate.nonnegativeDouble($data['msForm'], 'input', 3, 1)"
 * */
const nonnegativeDouble = (data, field, numbers, digits) => {
  if (field === undefined || field === null || field === '') return ''
  data[field] = data[field].replace(/[^0-9.]/gi, '').replace(/[0-9.]/gi, (a, b, c) => {
    if (digits === 0 && a === '.') return ''
    const pointIndex = c.indexOf('.')
    if (pointIndex === 0) return ''
    if (a === '.' && pointIndex !== b) return ''
    if (c.indexOf('0') === 0 && b === 1 && a !== '.') return ''
    if (pointIndex === -1 && numbers !== undefined && numbers !== -1 && b >= numbers) return ''
    if (pointIndex > 0 && numbers !== undefined && numbers !== -1 && b >= numbers && b < pointIndex) return ''
    if (pointIndex > 0 && digits !== undefined && digits !== -1 && b > pointIndex + digits && c.length - pointIndex - 1 > digits) return ''
    return a
  })
}

/**
 * 输入框input强制只能输入数字
 * 可根据需要进行数字限制
 * numbers：整数位数，undefiend和-1表示不限制
 * digits：小数位数，undefiend和-1表示不限制
 * min：最小值，undefiend表示不限制
 * max：最大值，undefiend表示不限制
 * @input="$msValidate.number($data, 'input')"
 * @input="$msValidate.number($data['msForm'], 'input')"
 * @input="$msValidate.number($data['msForm'], 'input', 3, 1)"
 * @input="$msValidate.number($data['msForm'], 'input', 3, 1, 0, 10)"
 * */
const number = (data, field, numbers, digits, min, max) => {
  if (field === undefined || field === null || field === '') return ''
  data[field] = data[field].replace(/[^0-9.-]/gi, '').replace(/[0-9.-]/gi, (a, b, c) => {
    if (a === '-' && b > 0) return ''
    if (min !== undefined && min >= 0 && a === '-' && b === 0) return ''
    if (digits === 0 && a === '.') return ''
    const negativeIndex = c.indexOf('-')
    const pointIndex = c.indexOf('.')
    if (negativeIndex === -1 && pointIndex === 0) return ''
    if (negativeIndex === 0 && pointIndex === 1) return ''
    if (a === '.' && pointIndex !== b) return ''
    if (negativeIndex === -1 && c.indexOf('0') === 0 && b === 1 && a !== '.') return ''
    if (negativeIndex === 0 && c.indexOf('0') === 1 && b === 2 && a !== '.') return ''
    if (negativeIndex === -1 && pointIndex === -1 && numbers !== undefined && numbers !== -1 && b >= numbers) return ''
    if (negativeIndex === 0 && pointIndex === -1 && numbers !== undefined && numbers !== -1 && b >= numbers + 1) return ''
    if (negativeIndex === -1 && pointIndex > 0 && numbers !== undefined && numbers !== -1 && b >= numbers && b < pointIndex) return ''
    if (negativeIndex === 0 && pointIndex > 1 && numbers !== undefined && numbers !== -1 && b >= numbers + 1 && b < pointIndex) return ''
    if (pointIndex > 0 && digits !== undefined && digits !== -1 && b > pointIndex + digits && c.length - pointIndex - 1 > digits) return ''
    if (b === c.length - 1 && ((min !== undefined && c < min) || (max !== undefined && c > max))) return ''
    return a
  })
}

/**
 * 输入框input强制只能输入大小写字母和数字
 * @input="$msValidate.capitalizationNumbers($data, 'input')"
 * @input="$msValidate.capitalizationNumbers($data['msForm'], 'input')"
 * */
const capitalizationNumbers = (data, field) => {
  if (field === undefined || field === null || field === '') return ''
  data[field] = data[field].replace(/[^0-9A-Za-z]/gi, '')
}

/**
 * 日期选择器picker-options强制日期不超过今天
 * :picker-options="$msValidate.noOverToday()"
 * */
const noOverToday = () => {
  return {
    disabledDate: time => {
      time.setHours(0, 0, 0, 0)
      const date = new Date()
      date.setHours(0, 0, 0, 0)
      return time.getTime() > date.getTime()
    }
  }
}

/**
 * 日期选择器picker-options强制日期大于另一个字段的日期
 * :picker-options="$msValidate.noSmallDate($data, 'date')"
 * :picker-options="$msValidate.noSmallDate($data['msForm'], 'date')"
 * 日期选择器picker-options强制日期大于等于另一个字段的日期
 * :picker-options="$msValidate.noSmallDate($data, 'date', true)"
 * :picker-options="$msValidate.noSmallDate($data['msForm'], 'date', true)"
 * */
const noSmallDate = (data, field, ifEquals) => {
  return {
    disabledDate: time => {
      time.setHours(0, 0, 0, 0)
      if (data[field] !== undefined && data[field] !== null && data[field] !== '') {
        if (ifEquals) return time.getTime() < new Date(Dayjs(data[field]).format('YYYY/MM/DD')).getTime()
        else return time.getTime() <= new Date(Dayjs(data[field]).format('YYYY/MM/DD')).getTime()
      }
      return false
    }
  }
}

/**
 * 日期选择器picker-options强制日期大于另一个字段的日期且不超过今天
 * :picker-options="$msValidate.noSmallDateNoOverToday($data, 'date')"
 * :picker-options="$msValidate.noSmallDateNoOverToday($data['msForm'], 'date')"
 * 日期选择器picker-options强制日期大于等于另一个字段的日期且不超过今天
 * :picker-options="$msValidate.noSmallDateNoOverToday($data, 'date', true)"
 * :picker-options="$msValidate.noSmallDateNoOverToday($data['msForm'], 'date', true)"
 * */
const noSmallDateNoOverToday = (data, field, ifEquals) => {
  return {
    disabledDate: time => {
      time.setHours(0, 0, 0, 0)
      const date = new Date()
      date.setHours(0, 0, 0, 0)
      if (data[field] !== undefined && data[field] !== null && data[field] !== '') {
        if (ifEquals && time.getTime() < new Date(Dayjs(data[field]).format('YYYY/MM/DD')).getTime()) return true
        if (!ifEquals && time.getTime() <= new Date(Dayjs(data[field]).format('YYYY/MM/DD')).getTime()) return true
      }
      return time.getTime() > date.getTime()
    }
  }
}

/**
 * 日期选择器picker-options强制日期小于等于另一个字段的日期
 * :picker-options="$msValidate.noBigDate($data, 'date')"
 * :picker-options="$msValidate.noBigDate($data['msForm'], 'date')"
 * */
const noBigDate = (data, field) => {
  return {
    disabledDate: time => {
      time.setHours(0, 0, 0, 0)
      if (data[field] !== undefined && data[field] !== null && data[field] !== '') return time.getTime() > new Date(Dayjs(data[field]).format('YYYY/MM/DD')).getTime()
      return false
    }
  }
}

/**
 * 日期选择器picker-options强制日期小于等于另一个字段的日期且不超过今天
 * :picker-options="$msValidate.noBigDateNoOverToday($data, 'date')"
 * :picker-options="$msValidate.noBigDateNoOverToday($data['msForm'], 'date')"
 * */
const noBigDateNoOverToday = (data, field) => {
  return {
    disabledDate: time => {
      time.setHours(0, 0, 0, 0)
      const date = new Date()
      date.setHours(0, 0, 0, 0)
      if (data[field] !== undefined && data[field] !== null && data[field] !== '') {
        if (time.getTime() > new Date(Dayjs(data[field]).format('YYYY/MM/DD')).getTime()) return true
      }
      return time.getTime() > date.getTime()
    }
  }
}

/**
 * 通用，取代message，message写法有内存泄漏问题
 * validator: (rule, value, callback) => {
 *   return this.$msValidate.message(rule, value, callback, 'message内容')
 * }
 * */
const message = (rule, value, callback, message) => {
  if (rule.required && (value === undefined || value === null || value.toString().length === 0)) return callback(new Error(message))
  return callback()
}

/**
 * 社会信用代码校验
 * validator: this.$msValidate.creditCode
 * */
const creditCode = (rule, value, callback) => {
  if (!rule.required && (value === undefined || value === null || value.length === 0)) return callback()
  if (value === undefined || value === null) return callback(new Error('请输入正确的社会信用代码'))
  if (value.length === 19 && value.lastIndexOf('#') === 18) return callback()
  if (value.length !== 18) return callback(new Error('请输入正确的社会信用代码'))
  const code = value.toUpperCase()
  if (!/^\w\w\d{6}\w{9}\w$/.test(code)) return callback(new Error('请输入正确的社会信用代码'))
  if (!/^[1,5,9,Y]\w\d{6}\w{9}\w$/.test(code)) return callback(new Error('请输入正确的社会信用代码'))
  if (!/^(11|12|13|19|51|52|53|59|91|92|93|Y1)\d{6}\w{9}\w$/.test(code)) return callback(new Error('请输入正确的社会信用代码'))
  const firstArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
  const firstKeys = [3, 7, 9, 10, 5, 8, 4, 2]
  const firstKey = creditCodeCalcKey(code.substring(8), firstArray, firstKeys, 11)
  let firstWord = undefined
  if (firstKey < 10) firstWord = firstKey
  else if (firstKey === 10) firstWord = 'X'
  else if (firstKey === 11) firstWord = '0'
  else return callback(new Error('请输入正确的社会信用代码'))
  if (firstWord.toString() !== code.substring(16, 17)) return callback(new Error('请输入正确的社会信用代码'))
  const secondArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'T', 'U', 'W', 'X', 'Y']
  const secondKeys = [1, 3, 9, 27, 19, 26, 16, 17, 20, 29, 25, 13, 8, 24, 10, 30, 28]
  const secondKey = creditCodeCalcKey(code, secondArray, secondKeys, 31)
  const secondWord = secondArray[secondKey]
  if (secondWord.toString() !== code.substring(17, 18)) return callback(new Error('请输入正确的社会信用代码'))
  const word = code.substring(0, 16) + firstWord + secondWord
  if (code === word) return callback()
  else return callback(new Error('请输入正确的社会信用代码'))
}

/**
 * 身份证号码校验
 * validator: this.$msValidate.idcCode
 * */
const idcCode = (rule, value, callback) => {
  if (!rule.required && (value === undefined || value === null || value.length === 0)) return callback()
  if (value === undefined || value === null || (value.length !== 15 && value.length !== 18)) return callback(new Error('请输入正确的身份证号码'))
  value = value.toUpperCase()
  if (!/(^\d{15}$)|(^\d{17}([0-9]|X)$)/.test(value)) return callback(new Error('请输入正确的身份证号码'))
  const citys = ['11', '12', '13', '14', '15', '21', '22', '23', '31', '32', '33', '34', '35', '36', '37', '41', '42', '43', '44', '45', '46', '50', '51', '52', '53', '54', '61', '62', '63', '64', '65', '71', '81', '82', '91']
  const code2 = value.substring(0, 2)
  let inCitys = false
  for (let i = 0, length = citys.length; i < length; i++) {
    if (code2 === citys[i]) {
      inCitys = true
      break
    }
  }
  if (!inCitys) return callback(new Error('请输入正确的身份证号码'))
  const arrInt = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9, 10, 5, 8, 4, 2]
  const arrCh = ['1', '0', 'X', '9', '8', '7', '6', '5', '4', '3', '2']
  if (value.length === 15) {
    const birthday15 = new Date('19' + value.substring(6, 8) + '/' + value.substring(8, 10) + '/' + value.substring(10, 12))
    if (!(birthday15.getFullYear().toString() === '19' + value.substring(6, 8) && (birthday15.getMonth() + 1 < 10 ? '0' + (birthday15.getMonth() + 1) : birthday15.getMonth() + 1).toString() === value.substring(8, 10) && (birthday15.getDate() < 10 ? '0' + birthday15.getDate() : birthday15.getDate()).toString() === value.substring(10, 12))) return callback(new Error('请输入正确的身份证号码'))
    value = value.substring(0, 6) + '19' + value.substring(6)
    let temp15 = 0
    for (let temp15I = 0; temp15I < 17; temp15I++) {
      temp15 += value.substring(temp15I, temp15I + 1) * arrInt[temp15I]
    }
    value += arrCh[temp15 % 11]
  }
  const birthday = new Date(value.substring(6, 10) + '/' + value.substring(10, 12) + '/' + value.substring(12, 14))
  if (!(birthday.getFullYear().toString() === value.substring(6, 10) && (birthday.getMonth() + 1 < 10 ? '0' + (birthday.getMonth() + 1) : birthday.getMonth() + 1).toString() === value.substring(10, 12) && (birthday.getDate() < 10 ? '0' + birthday.getDate() : birthday.getDate()).toString() === value.substring(12, 14))) return callback(new Error('请输入正确的身份证号码'))
  let temp = 0
  for (let tempI = 0; tempI < 17; tempI++) {
    temp += value.substring(tempI, tempI + 1) * arrInt[tempI]
  }
  if (arrCh[temp % 11] === value.substring(17)) return callback()
  else return callback(new Error('请输入正确的身份证号码'))
}

/**
 * 座机号码校验
 * validator: this.$msValidate.landline
 * */
const landline = (rule, value, callback) => {
  if (!rule.required && (value === undefined || value === null || value.length === 0)) return callback()
  if (value === undefined || value === null || value.length === 0) return callback(new Error('请输入正确的座机号码'))
  if (!/(^\s*$|^0(([1,2]\d)|([3-9]\d{2}))[-]?\d{7,8}$)/.test(value)) return callback(new Error('请输入正确的座机号码'))
  return callback()
}

/**
 * 手机号码校验
 * validator: this.$msValidate.mobilePhone
 * */
const mobilePhone = (rule, value, callback) => {
  if (!rule.required && (value === undefined || value === null || value.length === 0)) return callback()
  if (value === undefined || value === null || value.length !== 11) return callback(new Error('请输入正确的手机号码'))
  if (!/(^\s*$|^[1][3-9]\d{9}$)/.test(value)) return callback(new Error('请输入正确的手机号码'))
  return callback()
}

/**
 * 手机号码或座机号码校验
 * validator: this.$msValidate.mbPeLdline
 * */
const mbPeLdline = (rule, value, callback) => {
  if (!rule.required && (value === undefined || value === null || value.length === 0)) return callback()
  if (value === undefined || value === null || value.length === 0) return callback(new Error('请输入正确的手机号码或座机号码'))
  if (!/(^\s*$|^0(([1,2]\d)|([3-9]\d{2}))[-]?\d{7,8}$)/.test(value) && !/(^\s*$|^[1][3-9]\d{9})$/.test(value)) return callback(new Error('请输入正确的手机号码或座机号码'))
  return callback()
}

/**
 * 邮箱校验
 * validator: this.$msValidate.email
 * */
const email = (rule, value, callback) => {
  if (!rule.required && (value === undefined || value === null || value.length === 0)) return callback()
  if (value === undefined || value === null) return callback(new Error('请输入正确的邮箱'))
  if (!/(^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$)/.test(value)) return callback(new Error('请输入正确的邮箱'))
  return callback()
}

/**
 * 中国邮政编码校验
 * validator: this.$msValidate.zipCode
 * */
const zipCode = (rule, value, callback) => {
  if (!rule.required && (value === undefined || value === null || value.length === 0)) return callback()
  if (value === undefined || value === null) return callback(new Error('请输入正确的邮政编码'))
  if (!/(^[0-9]\d{5}$)/.test(value)) return callback(new Error('请输入正确的邮政编码'))
  return callback()
}

/**
 * 验证8-16位密码，必须包含大写字母、小写字母和数字
 * validator: this.$msValidate.password
 * */
const password = (rule, value, callback) => {
  if (!rule.required && (value === undefined || value === null || value.length === 0)) return callback()
  if (value === undefined || value === null || value.length < 8 || value.length > 16) return callback(new Error('密码应为8-16位，必须包含大写字母、小写字母和数字'))
  if (!(/([A-Z]+)/.test(value) && /([a-z]+)/.test(value) && /([0-9]+)/.test(value))) return callback(new Error('密码应为8-16位，必须包含大写字母、小写字母和数字'))
  return callback()
}


/**
 * 社会信用代码校验-计算key
 * */
const creditCodeCalcKey = (code, array, keys, dividend) => {
  let count = 0
  for (let i = 0, length = keys.length; i < length; i++) {
    count += keys[i] * array.indexOf(code[i])
  }
  const remainder = count % dividend
  return remainder === 0 ? 0 : dividend - remainder
}

export default {  nonnegativeInteger, positiveInteger, nonnegativeDouble, number, capitalizationNumbers, noOverToday, noSmallDate, noSmallDateNoOverToday, noBigDate, noBigDateNoOverToday, message, creditCode, idcCode, landline, mobilePhone, mbPeLdline, email, zipCode, password }


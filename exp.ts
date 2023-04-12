export default {
    // 正则
    regExp:()=>{
      return {
        tel :/^1[345789]\d{9}$/, //手机号验证规则
        idCard : /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/, // 身份证验证规则
        regCode : /^\d{4}$/, //验证码规则
        email: /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/, //邮箱地址
        power_password: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,10}$/, // 强密码
        password: /^[a-zA-Z]\w{5,17}$/, // 段密码
        url:/^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/,
        bank_Code:(num) => { // 银行卡号
          let arr = (num + '')
            .split('')
            .reverse()
            .map(x => parseInt(x));
          let lastDigit = arr.splice(0, 1)[0];
          let sum = arr.reduce((acc, val, i) => (i % 2 !== 0 ? acc + val : acc + ((val * 2) % 9) || 9), 0);
          sum += lastDigit;
          return sum % 10 === 0;
        }
        /*......*/
      }
    }
}

/**
 * 使用
 *     var value ="" // 手机号码举例
    console.log(regExp.regExp().tel.test(value));
 */
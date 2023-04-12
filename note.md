# 一些技巧
## 变量交换
<script>
[foo, bar] = [bar, foo]
</script>
## 华氏度和摄氏度之间的转化
<script>
    const celsiusToFahrenheit = (celsius) => celsius * 9/5 + 32;
    const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5/9;
</script>
## 生成一个数组
<script> 
    const list = new Array(100).fill(0).map(() => Math.floor(Math.random() * 100))
</script>
## 假进度条
<script>
pnpm add fake-progress
import FakeProgress from 'fake-progress'
const fake = new FakeProgress({
    timeConstant: 10000,
    autoStart: true,
})
 显示 ===> fake.progress

 绑定组件 ===> parseInt(fake.progress * 100);

 结束 ===> fake.end()

</script>











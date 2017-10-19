/**
 * @file 模拟数据配置文件
 */

module.exports = {
  // true(开启模拟) || false(关闭模拟)
  switch: true,
  // all(模拟全部接口,忽略list数组中的接口) || some(只模拟list数组中的接口) || ignore(模拟除list数组外的接口)
  type: 'some',
  // 需要模拟的接口、与忽略的接口列表
  list: [
    '/order/create',
  ],
}

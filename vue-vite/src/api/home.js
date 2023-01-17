import { proxypost,proxyget } from "./_httpproxy";
import { mytget, mytpost } from "./_httpmyt";
import { orderpget, orderppost } from "./_httporderp";
// 事件总数
export const getEventTotalCount=proxyget('/api/ythEvent/getEventTotalCount')
// 今日事件总数
export const getEventTodayCount=proxyget('/api/ythEvent/getEventTodayCount')
// 事件类型占比
export const getEventTypeZhanbi=proxyget('/api/ythEvent/getEventClassCodeStatistic')
// 事件趋势
export const getEventqushi=proxyget('/api/ythEvent/getEventDateTrend')
// 本月各个区县情况
export const getEventqingkuang=proxyget('/api/ythEvent/getEventMonthCount')
//获取事件列表
export const getEventList= proxyget('/api/ythEvent/getEventList')
// 获取单位
export const getOrgName=proxyget('/public/yEventClassCodeDict/getOrgName')
// 获取类型
export const getClassCode=proxyget('/public/yEventClassCodeDict/getClassCode')

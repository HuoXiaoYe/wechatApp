# wechatApp

> 这是一个微信小程序 `本地宝`，刚刚开始学微信小程序，多多指教。这还是一个未完成的项目.......

#### 偷过来的一些知识点 嘻嘻嘻

# 微信小程序文件结构

## 主体文件结构

主体部分由三个文件组成，必须放在项目的根目录，如下：

| 文件                                       | 必填   | 作用       |
| ---------------------------------------- | ---- | -------- |
| [app.js](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/app.html) | 是    | 小程序逻辑    |
| [app.json](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html) | 是    | 小程序公共设置  |
| [app.wxss](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxss.html) | 否    | 小程序公共样式表 |

## 页面文件结构

页面由四个文件组成，分别是：

| 文件类型                                     | 必填   | 作用                                 |
| ---------------------------------------- | ---- | ---------------------------------- |
| [js](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html) | 是    | 页面逻辑 ( 微信小程序没有window和document对象 )  |
| [wxml](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/) | 是    | 页面结构  ( XML语法，不是HTML语法 )           |
| [wxss](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxss.html) | 否    | 页面样式表 ( **拓展了rpx尺寸单位，微信专属响应式像素** ) |
| [json](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#pagejson) | 否    | 页面配置  ( 不能写注释，否则编译报错 )             |

# 微信小程序配置

## app.json 配置项列表

> `app.json`文件用来对微信小程序进行全局配置，决定页面文件的路径、窗口表现、设置网络超时时间、设置多 tab 等。

| 属性                                       | 类型           | 必填   | 描述              |
| ---------------------------------------- | ------------ | ---- | --------------- |
| [pages](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#pages) | String Array | 是    | 设置页面路径          |
| [window](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#window) | Object       | 否    | 设置默认页面的窗口表现     |
| [tabBar](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#tabbar) | Object       | 否    | 设置底部 tab 的表现    |
| [debug](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#debug) | Boolean      | 否    | 设置是否开启 debug 模式 |

### window配置

> 用于设置小程序的状态栏、导航条、标题、窗口背景色。
>
> 注意：页面的`.json`只能设置 `window` 相关的配置项，以决定本页面的窗口表现，所以无需写 `window` 这个键。

| 属性                           | 类型       | 默认值     | 描述                                       |
| ---------------------------- | -------- | ------- | ---------------------------------------- |
| navigationBarBackgroundColor | HexColor | #000000 | 导航栏背景颜色，如"#000000"                       |
| navigationBarTextStyle       | String   | white   | 导航栏标题颜色，仅支持 black/white                  |
| navigationBarTitleText       | String   |         | 导航栏标题文字内容                                |
| backgroundColor              | HexColor | #ffffff | 窗口的背景色                                   |
| backgroundTextStyle          | String   | dark    | 下拉背景字体、loading 图的样式，仅支持 dark/light       |
| enablePullDownRefresh        | Boolean  | false   | 是否开启下拉刷新，详见[页面相关事件处理函数](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/app-service/page.html#页面相关事件处理函数)。 |
| onReachBottomDistance        | Number   | 50      | 页面上拉触底事件触发时距页面底部距离，单位为px                 |


### [tabBar](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/config.html#tabbar)

如果小程序是一个多 tab 应用（客户端窗口的底部或顶部有 tab 栏可以切换页面），可以通过 tabBar 配置项指定 tab 栏的表现，以及 tab 切换时显示的对应页面。

**Tip：**

1. 当设置 position 为 top 时，将不会显示 icon。
2. tabBar 中的 list 是一个数组，**只能配置最少2个、最多5个 tab**，tab 按数组的顺序排序。

**属性说明：**

| 属性              | 类型       | 必填   | 默认值    | 描述                                 |
| --------------- | -------- | ---- | ------ | ---------------------------------- |
| color           | HexColor | 是    |        | tab 上的文字默认颜色                       |
| selectedColor   | HexColor | 是    |        | tab 上的文字选中时的颜色                     |
| backgroundColor | HexColor | 是    |        | tab 的背景色                           |
| borderStyle     | String   | 否    | black  | tabbar上边框的颜色， 仅支持 black/white      |
| list            | Array    | 是    |        | tab 的列表，详见 list 属性说明，最少2个、最多5个 tab |
| position        | String   | 否    | bottom | 可选值 bottom、top，设置成top是无图标          |

其中 list 接受一个数组，数组中的每个项都是一个对象，其属性值如下：

| 属性               | 类型     | 必填   | 说明                                       |
| ---------------- | ------ | ---- | ---------------------------------------- |
| pagePath         | String | 是    | 页面路径，必须在 pages 中先定义                      |
| text             | String | 是    | tab 上按钮文字                                |
| iconPath         | String | 否    | 图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px，当 postion 为 top 时，此参数无效 |
| selectedIconPath | String | 否    | 选中时的图片路径，icon 大小限制为40kb，建议尺寸为 81px * 81px ，当 postion 为 top 时，此参数无效 |




# 微信小程序组件(标签)

组件文档：https://mp.weixin.qq.com/debug/wxadoc/dev/component/

## 常用布局标签

```xml
<view></view>				相当于    <div></div>
<text></text>				相当于    <span></span>
<image></image>				相当于    <img />
<navigator></navigator>		相当于    <a></a>
<block></block>				区块标签，不会渲染到页面
```

**注意：image组件默认宽度300px、高度225px，很多时候我们都不需要这个默认宽高，记得手动设置宽高**

## 常用表单标签

```xml
<button></button>
<input type="text" />				
<checkbox />
<radio/>
```

## 轮播图组件

```xml
<swiper indicator-dots="是否显示面板指示点" autoplay="是否自动切换" interval="自动切换时间间隔" duration="滑动动画时长">
	<swiper-item>
      	<image src="图片路径1" width="375" height="150"/>
    </swiper-item>
	<swiper-item>
      	<image src="图片路径2" width="375" height="150"/>
    </swiper-item>
</swiper>
```


# 微信小程序页面函数

## 生命周期函数

```javascript
Page({
  /** 页面的初始数据 */
  data: {
  },
  /** 生命周期函数--监听页面加载 */
  onLoad: function (options) {
  },
  /** 生命周期函数--监听页面初次渲染完成 */
  onReady: function () {
  },
  /** 生命周期函数--监听页面显示 */
  onShow: function () {
  },
  /** 生命周期函数--监听页面隐藏 */
  onHide: function () {
  },
  /** 生命周期函数--监听页面卸载 */
  onUnload: function () {
  }
})
```

## 页面相关事件处理函数

```javascript
 /** 页面相关事件处理函数--监听用户下拉动作 */
  onPullDownRefresh: function () {
  },
  /** 页面上拉触底事件的处理函数 */
  onReachBottom: function () {
  },
  /** 用户点击右上角分享 */
  onShareAppMessage: function () {
  }
```

# WXML  布局

## [数据绑定](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/data.html)  {{ }}

```xml
<!--wxml-->
<view> {{message}} </view>
```

```javascript
// page.js
Page({
  data: {
    message: 'Hello MINA!'
  }
})
```

### 特别注意

1. **花括号和引号之间不能有空格**
2. **不要直接写 checked="false"，其计算结果是一个字符串，转成 boolean 类型后代表真值。**

```xml
<checkbox checked="false"> </checkbox>					其计算结果是一个字符串，转成 boolean 类型后变成了 true
<checkbox checked="{{false}}"> </checkbox>				正确写法
```
## [列表渲染](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/list.html)  wx:for

```xml
<!--wxml-->
<view wx:for="{{array}}"> {{item}} </view>
```

```javascript
// page.js
Page({
  data: {
    array: [1, 2, 3, 4, 5]
  }
})
```

### wx:key   提高列表渲染时排序的效率

`wx:key` 的值以两种形式提供

1. 字符串，代表在 for 循环的 array 中 item 的某个 property，该 property 的值需要是列表中唯一的字符串或数字，且不能动态改变。
2. 保留关键字 `*this` 代表在 for 循环中的 item 本身，这种表示需要 item 本身是一个唯一的字符串或者数字。

## [条件渲染](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/conditional.html)  wx:if   wx:else   wx:elif 

```xml
<!--wxml-->
<view wx:if="{{length >= 80}}"> 优秀 </view>
<view wx:elif="{{length >= 60}}"> 良好 </view>
<view wx:else> 加油 </view>
```

```javascript
// page.js
Page({
  data: {
    length: '95'
  }
})
```

### `wx:if` 与 `hidden` 区别

 `wx:if`  是否渲染， `hidden`  是否隐藏。

一般来说，`wx:if` 有更高的切换消耗而 `hidden` 有更高的初始渲染消耗。

因此，如果需要频繁切换的情景下，用 `hidden` 更好。

## [事件](https://mp.weixin.qq.com/debug/wxadoc/dev/framework/view/wxml/event.html)  

- 事件对象可以获取额外信息，如 id, dataset(自定义属性集合), touches(触摸点坐标)。

### 事件绑定和冒泡

1. 冒泡事件    bind事件类型        如	 `bindtap`   `bindlongpress`
2. 非冒泡事件    catch事件类型    如  `catchtap`   ` catchlongpress`

### 常用事件类型

| 类型        | 触发条件                                     |
| --------- | ---------------------------------------- |
| tap       | 手指触摸后马上离开                                |
| longpress | 手指触摸后，超过350ms再离开，如果指定了事件回调函数并触发了这个事件，tap事件将不被触发 |

```xml
<!--wxml-->
<view data-index="自定义属性" bindtap="tapHandle"> 点我触发事件 </view>
```

```javascript
// page.js
Page({
  tapHandle: function(event) {
    console.log(event)
  }
})
```

### 事件传参注意

小程序绑定事件只能写函数名称，不能通过括号方式传参。

```xml
<!--wxml-->
<view bindtap="tapHandle(520)"> 点我触发事件 </view>								错误，事件不能触发
<view data-index="520" bindtap="tapHandle"> 点我触发事件 </view>	
```
```javascript
// page.js
Page({
  tapHandle: function(event) {
     console.log( event.target.dataset.index );  // 输出标签自定义属性上的index值
  }
})
```

## WXS  脚本

WXS（WeiXin Script）是小程序的一套脚本语言，功能类似`<script>`标签，用于在视图层定义函数(比较少用)。

```xml
<!--wxml-->
<wxs module="foo">
var sum = function(a,b){
  return a+b;
};
// 这里可以导出一个对象，这个对象可以直接在界面上使用 
module.exports.sum = sum;
</wxs>

<view> {{foo.sum}} </view>
```

# WXSS 样式

WXSS(WeiXin Style Sheets)是一套样式语言。

与 CSS 相比，WXSS 扩展以下2个特性：

- 尺寸单位      rpx ( responsive pixel 响应式像素) 
- 样式导入      @import  "样式表路径";

# 常用快捷键

| 快捷键             | 说明     |
| --------------- | ------ |
| shift + alt + F | 格式化代码  |
| ctrl + P        | 跳到文件   |
| ctrl + E        | 跳到最近文件 |


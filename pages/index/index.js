//index.js
//获取应用实例
const app = getApp()

Page({
  data : {
    banImgUrls : [
      '/assets/images/banner-01.png',
      '/assets/images/banner-02.png'
    ],
    icondata : [
      { 'url': '/assets/icons/grid-01.png',desc : '美食'},
      { 'url': '/assets/icons/grid-02.png', desc: '结婚啦' },
      { 'url': '/assets/icons/grid-03.png', desc: '卡拉OK' },
      { 'url': '/assets/icons/grid-04.png', desc: '找工作' },
      { 'url': '/assets/icons/grid-05.png', desc: '辅导班' },
      { 'url': '/assets/icons/grid-06.png', desc: '汽车保养' },
      { 'url': '/assets/icons/grid-07.png', desc: '租房' },
      { 'url': '/assets/icons/grid-08.png', desc: '装修'}
    ]
  }
})

//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    wording: 'girl',
    imgs:[
      '../../img/icon/index.png',
      '../../img/icon/sort.png',
      '../../img/icon/cal.png',
      '../../img/icon/head.png',
    ],
    imgs_change:[
      '../../img/icon/index-active.png',
      '../../img/icon/sort-active.png',
      '../../img/icon/cal-active.png',
      '../../img/icon/head-active.png',
    ],
    img_one:'../../img/icon/index.png',
    img_two:'../../img/icon/sort.png',
    img_three:'../../img/icon/cal.png',
    img_four:'../../img/icon/head.png',
  },
  // 根据用户的点击改变图标的颜色
  change_img: function(event) {
    this.init_imgs();
    let num=event.currentTarget.dataset.num;
    if(num==1){
      console.log(1)
      this.setData({img_one:this.data.imgs_change[0]})
    }else if(num==2){
      this.setData({img_two:this.data.imgs_change[1]})
    }else if(num==3){
      this.setData({img_three:this.data.imgs_change[2]})
    }else if(num==4){
      this.setData({img_four:this.data.imgs_change[3]})
    }
  },
  init_imgs:function(){
    this.setData({img_one:this.data.imgs[0]})
    this.setData({img_two:this.data.imgs[1]})
    this.setData({img_three:this.data.imgs[2]})
    this.setData({img_four:this.data.imgs[3]})
  }
})

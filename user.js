var mongoose = require('mongoose');
var Schema = mongoose.Schema;
//用户管理
var userSchema = new Schema({
  // 登录名
  userAcount: {
    type: String
  },
  // 密码
  userPwd: {
    type: String
  },
  // 手机号
  userPhone: {
    type: String
  },
  // 邮件
  userMail: {
    type: String
  },
  // 姓名
  userName: {
    type: String
  },
  // 角色，平台管理员 0，门店管理员 1
  userType: {
    type: Number
  },
  // 状态，申请中：0、可用：1、不可用：2
  userStatus: {
    type: Number
  },
  // 关联门店ID
  shopId: {
    type: Schema.Types.ObjectId,
    ref: "shop" 
  },
  // 关联商品ID
  goodsId: {
    type: Schema.Types.ObjectId,
    ref: "goods"
  },
  // 关联服务ID
  serviceId: {
    type: Schema.Types.ObjectId,
    ref: "service"
  },
  // 关联会员ID
  memberId: {
    type: Schema.Types.ObjectId,
    ref: "member"
  },
});

mongoose.model("user", userSchema, "user");
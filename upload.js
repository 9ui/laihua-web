const qiniu = require('qiniu');
const fs = require('fs');
const path = require('path');
const PUBLIC_PATH = path.join(__dirname, '/');

// 上传凭证
var accessKey = 'Sj8jmgLBhn82tCwdKHb9Z19D12PZk7BX9_Qd4Zgj';
var secretKey = 'NBOp-aDv4XYvFetfHZRNAlFJ4zL2_dMoAfCChxq5';
var mac = new qiniu.auth.digest.Mac(accessKey, secretKey);

var options = {
  scope: 'laihua',
};
var putPolicy = new qiniu.rs.PutPolicy(options);
var uploadToken = putPolicy.uploadToken(mac);

var config = new qiniu.conf.Config();
// 空间对应的机房
config.zone = qiniu.zone.Zone_z2;
// 是否使用https域名
config.useHttpsDomain = true;
// 上传是否使用cdn加速
config.useCdnDomain = true;

/**
 * 遍历文件夹递归上传
 * @param {path} src 本地路径
 * @param {string} dist oos文件夹名
 * @param {boolean} isDir 是否为文件夹下文件
 */
async function addFileToOSSSync(src, dist, isDir) {
  let docs = fs.readdirSync(src);
  docs.forEach(function (doc) {
    let _src = src + '/' + doc,
      _dist = dist + '/' + doc;
    let st = fs.statSync(_src);
    // 判断是否为文件
    if (st.isFile() && dist !== 'LICENSES`') {
      putOSS(_src, !isDir ? doc : `fonts/${doc}`); //如果是文件夹下文件，文件名为 fonts/文件名
    }
    // 如果是目录则递归调用自身
    else if (st.isDirectory()) {
      addFileToOSSSync(_src, _dist, true);
    }
  });
}
/**
 *单个文件上传至oss
 */
async function putOSS(src, dist) {
  try {
    var localFile = src;
    var formUploader = new qiniu.form_up.FormUploader(config);
    var putExtra = new qiniu.form_up.PutExtra();
    var key = dist;
    // 文件上传
    await formUploader.putFile(
      uploadToken,
      key,
      localFile,
      putExtra,
      function (respErr, respBody, respInfo) {
        if (respErr) {
          throw respErr;
        }
        if (respInfo.statusCode == 200) {
          console.log(key + '上传oss成功');
        } else {
          console.log(respInfo.statusCode);
          console.log(respBody);
        }
      }
    );
  } catch (e) {
    console.log('上传失败'.e);
  }
}
/**
 *上传文件启动
 */
async function upFile() {
  try {
    let src = PUBLIC_PATH + '.nuxt/dist/client';
    let docs = fs.readdirSync(src);
    await addFileToOSSSync(src, docs);
  } catch (err) {
    console.log('上传oss失败', err);
  }
}
upFile();

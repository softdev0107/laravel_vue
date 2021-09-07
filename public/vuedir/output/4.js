(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./resources/vuedir/assets/jsfunc/device_area.js":
/*!*******************************************************!*\
  !*** ./resources/vuedir/assets/jsfunc/device_area.js ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _mjs_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./mjs_module */ "./resources/vuedir/assets/jsfunc/mjs_module.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }


var DevClsOBJ = null;
var DevVueOBJ = null;
var Timer = null;
var timercnt = 40;

var deviceCLS = /*#__PURE__*/function () {
  function DeviceArea(vOBJ, perm, tabstatus, pgname) {
    _classCallCheck(this, DeviceArea);

    DevClsOBJ = this;
    DevVueOBJ = vOBJ;
    this.perm = perm; //퍼미션

    this.pageLangs = [];
    this.seletedLang = '';
    this.tabstate = tabstatus; //slider...

    this.pgname = pgname;
    this.pageDevices = "";
    this.pre_pageDevices = "";
    this.selectedDevice = '';
    this.selectedDeviceidx = 0;
    this.tagContainer = null;
    this.nowEventState = "";
    this.devAllList = ['D:Desktop', 'M:Mobile', 'T:Tablet'];
    if (this.getDevicesFromDB()) this.generateTag();
    Timer = setInterval(function () {
      if (DevClsOBJ.pageLangs.length > 0 || timercnt < 1) {
        clearInterval(Timer);
      }

      --timercnt;
    }, 500);
  }

  _createClass(DeviceArea, [{
    key: "getDeviceAllList",
    value: function getDeviceAllList() {
      return this.devAllList;
    }
  }, {
    key: "getPageDevices",
    value: function getPageDevices() {
      return this.pageDevices;
    }
  }, {
    key: "checkTagContainer",
    value: function checkTagContainer() {
      var obj = document.querySelector("[data-device]");

      if (obj != undefined && obj != null) {
        if (this.tagContainer == null) this.tagContainer = obj;
        return true;
      } else {
        this.outputError('not obj [data-device]');
        return false;
      }
    }
  }, {
    key: "initPageLangs",
    value: function initPageLangs(lang) {
      this.pageLangs = lang; //console.log(this.pageLangs);//del
    }
  }, {
    key: "getDevicesFromDB",
    value: function getDevicesFromDB() {
      var flag = false;
      $.ajax({
        url: 'admin.getEachPageDevices',
        type: 'POST',
        data: {
          pagename: this.pgname
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            if (data.pagedevices !== '') {
              DevClsOBJ.pageDevices = data.pagedevices;
              DevClsOBJ.pre_pageDevices = DevClsOBJ.pageDevices;
              DevClsOBJ.selectedDevice = DevClsOBJ.pageDevices.split(",")[0];
            } else {
              DevClsOBJ.pageDevices = "DMT";
              DevClsOBJ.pre_pageDevices = DevClsOBJ.pageDevices;
              DevClsOBJ.selectedDevice = DevClsOBJ.pageDevices;
            } //console.log(DevClsOBJ.pageDevices);

          } else {
            DevClsOBJ.pageDevices = "DMT";
            DevClsOBJ.pre_pageDevices = DevClsOBJ.pageDevices;
            DevClsOBJ.selectedDevice = DevClsOBJ.pageDevices;
          }

          flag = true;
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
          DevClsOBJ.pageDevices = "DMT";
          DevClsOBJ.pre_pageDevices = DevClsOBJ.pageDevices;
          DevClsOBJ.selectedDevice = DevClsOBJ.pageDevices;
          flag = true;
        }
      });
      return flag;
    }
  }, {
    key: "setPageOBJTabStatue",
    value: function setPageOBJTabStatue(tab) {
      this.tabstate = tab;
    }
  }, {
    key: "setDevicesToDB",
    value: function setDevicesToDB() {
      var flag = false;
      $.ajax({
        url: 'admin.saveEachPageDevices',
        type: 'POST',
        data: {
          pagedevices: JSON.stringify(this.pageDevices),
          pageLangs: JSON.stringify(this.pageLangs),
          pagename: this.pgname
        },
        async: false,
        success: function success(data) {
          if (data.msg == "ok") {
            flag = true;
          }
        },
        error: function error(jqXHR, errdata, errorThrown) {
          console.log(errdata);
        }
      });
      return flag;
    }
  }, {
    key: "generateTag",
    value: function generateTag() {
      if (this.checkTagContainer()) {
        var pgtxt_adaptative = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'pgtxt_adaptative');
        var btntxt_add = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'btntxt_add');
        var btntxt_change = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'btntxt_change');
        $(this.tagContainer).html('');
        var tags = '<div class="col-md-12">';
        tags += '<div class="page1_translate_bar">';
        tags += '<div class="page1_translate_text data-ajax" data-ajax="pgtxt_adaptative">' + pgtxt_adaptative + '</div>';
        tags += '<div class="page1_translate_bar_left" id="' + this.name + '_devlist">';
        if (this.nowEventState == "c") tags += this.addDevicesOnTabWC();else tags += this.addDevicesOnTabWA();
        tags += '</div>';
        tags += '<div class="page1_translate_bar_right" id="' + this.name + '_area_btn_controll">';
        var addactive = "";
        if (this.isShowAddBtn()) addactive = "active";
        tags += '<span class="page1_translate_span_right cursor-pointer mr-3 device_span_add_btn_area ' + addactive + '" id="' + this.name + '_add">';
        tags += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" data-inline="false" data-icon="gg:add" class="iconify" style="font-size: 24px; transform: rotate(360deg);"><g fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2 12C2 6.477 6.477 2 12 2s10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12zm10-8a8 8 0 1 0 0 16a8 8 0 0 0 0-16z" fill="currentColor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M13 7a1 1 0 1 0-2 0v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7z" fill="currentColor"></path></g></svg>';
        tags += '&nbsp;<span class="data-ajax" data-ajax="btntxt_add">' + btntxt_add + '</span>';
        tags += '</span>';
        var changeactive = "";
        var cnt_devsplitlist = this.pageDevices.split(",");

        if (cnt_devsplitlist.length == 1) {
          changeactive = "active";
        } else {
          var tmp = [];

          for (var i = 0; i < cnt_devsplitlist.length; i++) {
            var wd = cnt_devsplitlist[i];

            for (var ii = 0; ii < wd.length; ii++) {
              tmp.push(wd.charAt(ii));
            }
          }

          if (tmp.length < 3) changeactive = "active";else {
            var wd = this.getSelectedDevice();
            if (wd != "" && wd.length == 2) changeactive = "active";
          }
        }

        tags += '<span class="page1_translate_span_right cursor-pointer mr-3 device_span_change_btn_area ' + changeactive + '" id="' + this.name + '_change">';
        tags += '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="font-size: 24px; transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 24 24" class="iconify" data-inline="false" data-icon="ic:outline-new-releases"><path d="M23 12l-2.44-2.78l.34-3.68l-3.61-.82l-1.89-3.18L12 3L8.6 1.54L6.71 4.72l-3.61.81l.34 3.68L1 12l2.44 2.78l-.34 3.69l3.61.82l1.89 3.18L12 21l3.4 1.46l1.89-3.18l3.61-.82l-.34-3.68L23 12zm-4.51 2.11l.26 2.79l-2.74.62l-1.43 2.41L12 18.82l-2.58 1.11l-1.43-2.41l-2.74-.62l.26-2.8L3.66 12l1.85-2.12l-.26-2.78l2.74-.61l1.43-2.41L12 5.18l2.58-1.11l1.43 2.41l2.74.62l-.26 2.79L20.34 12l-1.85 2.11zM11 15h2v2h-2zm0-8h2v6h-2z" fill="currentColor"></path></svg>';
        tags += '&nbsp;<span class="data-ajax" data-ajax="btntxt_change">' + btntxt_change + '</span>';
        tags += '</span>';
        tags += ' </div>';
        tags += '</div>';
        tags += '</div>';
        $(this.tagContainer).html(tags);
        this.deviceDelEvent();
        this.deviceSelectEvent();
        this.addBtnEvent();
        this.changeBtnEvent();
      } else {
        $(this.tagContainer).html("<div style='padding: 0 30px;'>not Tag [data-device]</div>");
      }
    }
  }, {
    key: "addDevicesOnTabWA",
    value: function addDevicesOnTabWA() {
      var cnt_devsplitlist = this.pageDevices.split(",");
      var item_tag = '';
      var pgtxt_alldevices = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'pgtxt_alldevices');

      if (this.pageDevices != "" && cnt_devsplitlist.length > 0) {
        if (cnt_devsplitlist.length == 1) {
          if (this.pageDevices.length == 3) {
            item_tag += '<span style="padding-right: 20px;" id="item_DMT">';
            item_tag += '<span class="page1_device_span active" style="cursor: pointer;" data-cont="DMT">' + pgtxt_alldevices + '</span>';
            item_tag += '</span>';
          } else if (this.pageDevices.length == 2) {
            var v0 = this.getValueByKey(this.pageDevices.charAt(0));
            var v1 = this.getValueByKey(this.pageDevices.charAt(1));
            item_tag += '<span style="padding-right: 20px;" id="item_' + this.pageDevices + '">';
            item_tag += '<span class="page1_device_span active" style="cursor: pointer;" data-cont="' + this.pageDevices + '">' + v0 + '/' + v1 + '</span>';
            item_tag += '</span>';
          } else if (this.pageDevices.length == 1) {
            var v0 = this.getValueByKey(this.pageDevices);
            item_tag += '<span style="padding-right: 20px;" id="item_' + this.pageDevices + '">';
            item_tag += '<span class="page1_device_span active" style="cursor: pointer;" data-cont="' + this.pageDevices + '">' + v0 + '</span>';
            item_tag += '</span>';
            this.setSelectedDevice(this.pageDevices);
          }

          this.selectedDeviceidx = 0;
        } else {
          for (var i = 0; i < cnt_devsplitlist.length; i++) {
            var item = cnt_devsplitlist[i];
            var itemkey = "";
            var itemval = "";

            if (item.length == 1) {
              itemkey = item.toUpperCase();
              itemval = this.getValueByKey(itemkey);
            } else if (item.length == 2) {
              var tmk0 = item.charAt(0);
              var tmv0 = this.getValueByKey(tmk0);
              var tmk1 = item.charAt(1);
              var tmv1 = this.getValueByKey(tmk1);
              itemkey = tmk0 + tmk1;
              itemval = tmv0 + '/' + tmv1;
            } else if (item.length == 3) {
              var tmk0 = item.charAt(0);
              var tmv0 = this.getValueByKey(tmk0);
              var tmk1 = item.charAt(1);
              var tmv1 = this.getValueByKey(tmk1);
              var tmk2 = item.charAt(2);
              var tmv2 = this.getValueByKey(tmk2);
              itemkey = tmk0 + tmk1 + tmk2;
              itemval = tmv0 + '/' + tmv1 + '/' + tmv2;
            }

            var active = "";

            if (i == cnt_devsplitlist.length - 1) {
              active = "active";
              this.selectedDeviceidx = i;
              this.setSelectedDevice(itemkey);
            }

            item_tag += '<span style="padding-right: 20px;" id="item_' + itemkey + '">';
            item_tag += '<span class="page1_device_span ' + active + '" style="cursor: pointer;" data-cont="' + itemkey + '">' + itemval + '</span>';
            if (cnt_devsplitlist.length > 1) item_tag += '<span class="span_deviceitemDel_controller" data-cont="' + itemkey + '">&nbsp;&nbsp;|&nbsp;&nbsp; × </span>';
            item_tag += '</span>';
          }
        }
      } else {
        this.outputError('error:addDevList fun');
      }

      return item_tag;
    }
  }, {
    key: "addDevicesOnTabWC",
    value: function addDevicesOnTabWC() {
      var cnt_devsplitlist = this.pageDevices.split(",");
      var item_tag = '';
      var pgtxt_alldevices = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'pgtxt_alldevices');

      if (this.pageDevices != "" && cnt_devsplitlist.length > 0) {
        if (cnt_devsplitlist.length == 1) {
          if (this.pageDevices.length == 3) {
            item_tag += '<span style="padding-right: 20px;" id="item_DMT">';
            item_tag += '<span class="page1_device_span active" style="cursor: pointer;" data-cont="DMT">' + pgtxt_alldevices + '</span>';
            item_tag += '</span>';
            this.setSelectedDevice("DMT");
          } else if (this.pageDevices.length == 2) {
            var v0 = this.getValueByKey(this.pageDevices.charAt(0));
            var v1 = this.getValueByKey(this.pageDevices.charAt(1));
            item_tag += '<span style="padding-right: 20px;" id="item_' + this.pageDevices + '">';
            item_tag += '<span class="page1_device_span active" style="cursor: pointer;" data-cont="' + this.pageDevices + '">' + v0 + '/' + v1 + '</span>';
            item_tag += '</span>';
            this.setSelectedDevice(this.pageDevices);
          } else if (this.pageDevices.length == 1) {
            var v0 = this.getValueByKey(this.pageDevices);
            item_tag += '<span style="padding-right: 20px;" id="item_' + this.pageDevices + '">';
            item_tag += '<span class="page1_device_span active" style="cursor: pointer;" data-cont="' + this.pageDevices + '">' + v0 + '</span>';
            item_tag += '</span>';
            this.setSelectedDevice(this.pageDevices);
          }

          this.selectedDeviceidx = 0;
        } else {
          for (var i = 0; i < cnt_devsplitlist.length; i++) {
            var item = cnt_devsplitlist[i];
            var itemkey = "";
            var itemval = "";

            if (item.length == 1) {
              itemkey = item.toUpperCase();
              itemval = this.getValueByKey(itemkey);
            } else if (item.length == 2) {
              var tmk0 = item.charAt(0);
              var tmv0 = this.getValueByKey(tmk0);
              var tmk1 = item.charAt(1);
              var tmv1 = this.getValueByKey(tmk1);
              itemkey = tmk0 + tmk1;
              itemval = tmv0 + '/' + tmv1;
            } else if (item.length == 3) {
              var tmk0 = item.charAt(0);
              var tmv0 = this.getValueByKey(tmk0);
              var tmk1 = item.charAt(1);
              var tmv1 = this.getValueByKey(tmk1);
              var tmk2 = item.charAt(2);
              var tmv2 = this.getValueByKey(tmk2);
              itemkey = tmk0 + tmk1 + tmk2;
              itemval = tmv0 + '/' + tmv1 + '/' + tmv2;
            }

            var active = "";

            if (i == this.selectedDeviceidx) {
              active = "active";
              this.setSelectedDevice(itemkey);
            }

            item_tag += '<span style="padding-right: 20px;" id="item_' + itemkey + '">';
            item_tag += '<span class="page1_device_span ' + active + '" style="cursor: pointer;" data-cont="' + itemkey + '">' + itemval + '</span>';
            if (cnt_devsplitlist.length > 1) item_tag += '<span class="span_deviceitemDel_controller" data-cont="' + itemkey + '">&nbsp;&nbsp;|&nbsp;&nbsp; × </span>';
            item_tag += '</span>';
          }
        }
      } else {
        this.outputError('error:addDevList fun');
      }

      return item_tag;
    }
  }, {
    key: "getValueByKey",
    value: function getValueByKey(key) {
      var val = "";

      for (var i = 0; i < this.devAllList.length; i++) {
        var dkey = this.devAllList[i].split(":")[0];
        var dval = this.devAllList[i].split(":")[1];

        if (dkey == key) {
          val = dval;
          break;
        }
      }

      return val;
    }
  }, {
    key: "getEmptyKeysDevice",
    value: function getEmptyKeysDevice(hasDevlist) {
      var retArry = [];

      if (Array.isArray(hasDevlist)) {
        for (var i = 0; i < this.devAllList.length; i++) {
          var dkey = this.devAllList[i].split(":")[0];
          var dval = this.devAllList[i].split(":")[1];
          var flag = false;

          for (var ii = 0; ii < hasDevlist.length; ii++) {
            var key = hasDevlist[ii];

            if (dkey == key) {
              flag = true;
              break;
            }
          }

          if (!flag) retArry.push(dkey);
        }
      } else {
        for (var i = 0; i < this.devAllList.length; i++) {
          var dkey = this.devAllList[i].split(":")[0];
          var dval = this.devAllList[i].split(":")[1];
          var flag = false;

          if (dkey != hasDevlist) {
            retArry.push(dkey);
          }
        }
      }

      return retArry;
    }
  }, {
    key: "devicePageDelete",
    value: function devicePageDelete(key) {
      var obj = document.getElementById('item_' + key);

      if (obj != undefined && obj != null) {
        $('#item_' + key).remove();
        if (DevClsOBJ.selectedDevice == key) DevClsOBJ.selectedDevice = "";
        var alist = [];
        var temparray = DevClsOBJ.pageDevices.split(",");

        for (var j = 0; j < temparray.length; j++) {
          var it = temparray[j];

          if (it != key) {
            alist.push(it);
          }
        }

        DevClsOBJ.pageDevices = '';
        if (alist.length > 0) DevClsOBJ.pageDevices = alist.join(",");
        DevClsOBJ.generateTag();
        if (DevVueOBJ != undefined && DevVueOBJ != null) DevVueOBJ.PageInitByDevice_Area();
      }
    }
  }, {
    key: "deviceDelEvent",
    value: function deviceDelEvent() {
      $(".span_deviceitemDel_controller").on("click", function () {
        var key = $(this).data("cont");
        var obj = document.getElementById('item_' + key);

        if (obj != undefined && obj != null) {
          // DevVueOBJ.deleteListByDevice(key, DevClsOBJ.pgname); //뷰의 함수 호출.
          _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.Confirm('pgtxt_devicepagedeleteconfirm', function (val) {
            if (val) {
              $.ajax({
                url: 'admin.deletefrontpageStatesByDevice',
                type: 'POST',
                data: {
                  device: key,
                  pagename: DevClsOBJ.pgname,
                  tabstatus: DevClsOBJ.tabstate
                },
                async: true,
                success: function success(data) {
                  if (data.msg == "ok") {
                    //$('#picture-container').html('');
                    // $("#slider_img_panel_frm")[0].reset();
                    DevClsOBJ.devicePageDelete(key); //call device_area.
                  } else _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert(data.msg);
                },
                error: function error(jqXHR, errdata, errorThrown) {
                  console.log(errdata);
                }
              });
            }
          });
        }
      });
    }
  }, {
    key: "deviceSelectEvent",
    value: function deviceSelectEvent() {
      $('.page1_device_span').click(function () {
        $('.page1_device_span').removeClass('active');
        $(this).addClass('active');
        var cont = $(this).data('cont');
        DevClsOBJ.setSelectedDevice(cont);

        var _pgOfTab = DevClsOBJ.getPageDevices().split(",");

        for (var i = 0; i < _pgOfTab.length; i++) {
          if (_pgOfTab[i] == cont) {
            DevClsOBJ.selectedDeviceidx = i;
            break;
          }
        }

        if (DevClsOBJ.isShowAddBtn()) $('.device_span_add_btn_area').addClass('active');else $('.device_span_add_btn_area').removeClass('active');
        if (DevClsOBJ.isShowChangeBtn()) $('.device_span_change_btn_area').addClass('active');else $('.device_span_change_btn_area').removeClass('active');
        if (DevVueOBJ != undefined && DevVueOBJ != null) DevVueOBJ.PageInitByDevice_Area();
      });
    }
  }, {
    key: "isShowChangeBtn",
    value: function isShowChangeBtn() {
      var current_selected_word = this.getSelectedDevice();
      if (current_selected_word == "") return false;
      var splitpage = this.pageDevices.split(",");
      var cnt_pgOfTab = splitpage.length;

      if (cnt_pgOfTab == 1) {
        return true;
      } else if (cnt_pgOfTab == 2) {
        if (current_selected_word.length == 2) return true;else {
          if (splitpage[0].length == 1 && splitpage[1].length == 1) return true;
        }
      } else if (cnt_pgOfTab == 3) {
        return false;
      }

      return false;
    }
  }, {
    key: "isShowAddBtn",
    value: function isShowAddBtn() {
      var tmp = this.pageDevices.split(",");
      var list = [];

      for (var i = 0; i < tmp.length; i++) {
        var t = tmp[i];
        if (t.length == 1) list.push(t);else if (t.length == 2) {
          list.push(t.charAt(0));
          list.push(t.charAt(1));
        } else if (t.length == 3) {
          list.push(t.charAt(0));
          list.push(t.charAt(1));
          list.push(t.charAt(2));
        }
      }

      if (list.length > 2) return false;
      return true;
    }
  }, {
    key: "addBtnEvent",
    value: function addBtnEvent() {
      var obj = document.querySelector("#" + this.name + "_add");

      if (obj != undefined && obj != null) {
        $(obj).on('click', function () {
          DevClsOBJ.showAddDlg();
        });
      } else {
        this.outputError(' not obj ' + this.name + '_add');
      }
    }
  }, {
    key: "changeBtnEvent",
    value: function changeBtnEvent() {
      var obj = document.querySelector("#" + this.name + "_change");

      if (obj != undefined && obj != null) {
        $(obj).on('click', function () {
          var st = DevClsOBJ.getSelectedDevice();

          if (st == null || st == "") {
            _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_plsselectdevicetype');
            return;
          } else DevClsOBJ.showChangeDlg();
        });
      } else {
        this.outputError(' not obj ' + this.name + '_change');
      }
    }
  }, {
    key: "showAddDlg",
    value: function showAddDlg() {
      var pgtxt_save = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'pgtxt_save');
      var pgtxt_adddevice = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'pgtxt_adddevice');
      var dlgmtag = '';
      dlgmtag += '<div class="modal fade" id="' + this.name + '_modal" role="dialog">';
      dlgmtag += '<div class="modal-dialog modal-dialog-centered" style="min-width:320px;">';
      dlgmtag += '<div class="modal-content">';
      dlgmtag += '<div class="modal-header">';
      dlgmtag += '<div class="wes-theme-color data-ajax" data-ajax="pgtxt_changedevice" style="font-size: 20px; font-weight: 600;">' + pgtxt_adddevice + '</div>';
      dlgmtag += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
      dlgmtag += '</div>';
      dlgmtag += '<div class="modal-body pt-0">';
      dlgmtag += '<div class="container-fluid p-0 m-0">';
      dlgmtag += '<div class="row m-2 mt-3">';
      var l_selectedDevice = this.getSelectedDevice();
      DevClsOBJ.pre_pageDevices = DevClsOBJ.pageDevices;
      var pageDevicesSplits = [];
      pageDevicesSplits = this.pageDevices.split(",");
      var temp = [];

      for (var jj = 0; jj < pageDevicesSplits.length; jj++) {
        var word = pageDevicesSplits[jj];

        if (word.length == 1) {
          temp.push(word);
        } else {
          for (var i = 0; i < word.length; i++) {
            temp.push(word.charAt(i));
          }
        }
      }

      var colval = [];

      for (var i = 0; i < this.devAllList.length; i++) {
        var dkey = this.devAllList[i].split(":")[0];
        var dval = this.devAllList[i].split(":")[1];
        var find = false;
        var end = false;

        for (var jj = 0; jj < temp.length; jj++) {
          var dt = temp[jj];

          if (dkey == dt) {
            find = true;
            break;
          }
        }

        if (!find) {
          var obj = {
            state: '',
            val: this.devAllList[i]
          };
          colval.push(obj);
        }
      }

      var colcnt = colval.length;
      var colcls = '12';
      if (colcnt == 1) colcls = '12';else if (colcnt == 2) colcls = '6';else if (colcnt == 3) colcls = '4';

      for (var jj = 0; jj < colcnt; jj++) {
        var k = colval[jj].val.split(":")[0];
        var v = colval[jj].val.split(":")[1];
        var state = colval[jj].state;
        dlgmtag += '<div class="col-' + colcls + '">';
        dlgmtag += '<div class="d-flex flex-row justify-content-center align-items-center">';
        dlgmtag += '<div class="device-dlg-item-chk ' + state + '" data-cont="' + k + '"></div>';
        dlgmtag += '<div class="ml-3 d-flex flex-column">';
        var svgtag = '';

        if (k == 'M') {
          svgtag = '<svg version="1.1" id="Capa_1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="90px" height="90px"  viewBox="0 0 105 105" style="enable-background:new 0 0 90 90; max-height:100px!important" xml:space="preserve"><g><path d="M66.132,0H34.87c-5.692,0-10.306,4.614-10.306,10.307v80.387c0,5.692,4.614,10.307,10.306,10.307h31.262 c5.691,0,10.306-4.614,10.306-10.307V10.306C76.438,4.614,71.823,0,66.132,0z M65.188,6.25c0.759,0,1.375,0.615,1.375,1.375 c0,0.76-0.616,1.375-1.375,1.375s-1.375-0.615-1.375-1.375C63.813,6.865,64.429,6.25,65.188,6.25z M60.063,7.25 c0.414,0,0.75,0.336,0.75,0.75c0,0.414-0.336,0.75-0.75,0.75s-0.75-0.336-0.75-0.75C59.313,7.586,59.648,7.25,60.063,7.25z M57.626,7.25c0.414,0,0.75,0.336,0.75,0.75c0,0.414-0.336,0.75-0.75,0.75s-0.75-0.336-0.75-0.75 C56.876,7.586,57.212,7.25,57.626,7.25z M44.75,4.5h11.5c0.345,0,0.625,0.279,0.625,0.625c0,0.346-0.28,0.625-0.625,0.625h-11.5 c-0.345,0-0.625-0.279-0.625-0.625C44.125,4.779,44.405,4.5,44.75,4.5z M54.884,98.309h-8.766c-1.446,0-2.617-1.172-2.617-2.617h14 C57.501,97.137,56.329,98.309,54.884,98.309z M73.056,90.229h-45.11V10.77h45.11V90.229z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        } else if (k == 'T') {
          svgtag = '<svg version="1.1" id="Capa_1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="90px"  height="90px" viewBox="0 0 105 105" style="enable-background:new 0 0 90 90; max-height:100px!important" xml:space="preserve"><g><path d="M87,0H20.5c-1.656,0-3,1.343-3,3v101.5c0,1.657,1.344,3,3,3H87c1.656,0,3-1.343,3-3V3C90,1.343,88.656,0,87,0z M53.75,103.75c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5S55.131,103.75,53.75,103.75z M86.333,96.416 H21.167V7.083h65.166V96.416z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        } else if (k == 'D') {
          svgtag = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="90px" height="90px" viewBox="0 0 120 105" style="enable-background:new 0 0 109.902 109.902;"\t xml:space="preserve"><g><path d="M106.654,15.087H3.252C1.459,15.087,0,16.545,0,18.338v57.297c0,0,0.002,0.002,0.002,0.004v2.863\t\tc0,1.059,0.857,1.916,1.914,1.916h42.32c-0.172,3.768-1.004,11.33-4.916,12.988c0,0-1.518,1.408,2.73,1.408h7.271h10.021h7.273\t\tc4.248,0,2.73-1.408,2.73-1.408c-3.912-1.658-4.746-9.221-4.916-12.988h43.594c1.061,0,1.871-0.857,1.871-1.916v-2.777\t\tc0-0.031,0.008-0.06,0.008-0.09V18.338C109.904,16.545,108.447,15.087,106.654,15.087z M52.869,79.786\t\tc0-0.895,0.725-1.619,1.619-1.619c0.895,0,1.619,0.725,1.619,1.619s-0.725,1.619-1.619,1.619 C53.594,81.405,52.869,80.681,52.869,79.786z M106.654,75.991H3.252V18.594c0-0.254,0.205-0.461,0.459-0.461h102.482\t\tc0.254,0,0.461,0.207,0.461,0.461V75.991z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        }

        dlgmtag += '<div class="w-100">' + svgtag + '</div>';
        dlgmtag += '<div class="w-100" style="text-align: center; margin-top: 8px;">' + v + '</div>';
        dlgmtag += '</div>';
        dlgmtag += '</div>';
        dlgmtag += '</div>';
      }

      dlgmtag += '</div>';
      dlgmtag += '</div>';
      dlgmtag += '</div>';
      dlgmtag += '<div class="modal-footer" style="height: auto;justify-content:center;padding: 0.6rem!important;">';
      dlgmtag += '<button type="button" id="' + this.name + '_modal_save_btn" data-state="c" class="btn page1_custom_select_btn mb-sm-2 data-ajax" data-ajax="pgtxt_save" style="height: 35px; border-radius: 20px; padding: 0px 25px; float: right; display: block;">';
      dlgmtag += pgtxt_save;
      dlgmtag += '</button>';
      dlgmtag += '</div>';
      dlgmtag += '</div>';
      dlgmtag += '</div>';
      dlgmtag += '</div>';
      $("body").append(dlgmtag);
      $('#' + this.name + '_modal').modal('show');
      $('#' + this.name + '_modal').on('hidden.bs.modal', function (e) {
        $('#' + DevClsOBJ.name + '_modal').remove();
      });
      $(".device-dlg-item-chk").click(function () {
        if ($(this).hasClass('active')) $(this).removeClass('active');else $(this).addClass('active');
      });
      $('#' + this.name + '_modal_save_btn').click(function () {
        //process close event
        var st = $(this).data('state');
        var activekeylist = [];
        $(".device-dlg-item-chk").each(function (index, item) {
          var k = $(item).data('cont');

          if ($(item).hasClass('active')) {
            activekeylist.push(k);
          }
        });

        if (activekeylist.length > 0) {
          var lists = DevClsOBJ.pageDevices.split(",");

          if (lists.length == 1) {
            if (activekeylist.length == 1) {
              lists.push(activekeylist[0]);
              DevClsOBJ.pageDevices = lists.join(",");
            } else if (activekeylist.length == 2) {
              var tt = activekeylist[0] + activekeylist[1];
              lists.push(tt);
              DevClsOBJ.pageDevices = lists.join(",");
            }
          } else if (lists.length == 2) {
            if (activekeylist.length == 1) {
              lists.push(activekeylist[0]);
              DevClsOBJ.pageDevices = lists.join(",");
            }
          }

          DevClsOBJ.nowEventState = "a";
          $('#' + DevClsOBJ.name + '_modal').modal('hide');

          if (DevClsOBJ.setDevicesToDB()) {
            DevClsOBJ.generateTag();
            if (DevVueOBJ != undefined && DevVueOBJ != null) DevVueOBJ.PageInitByDevice_Area();
          }
        }
      });
    }
  }, {
    key: "showChangeDlg",
    value: function showChangeDlg() {
      //$('#'+this.name+'_modal').remove();
      var pgtxt_save = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'pgtxt_save');
      var pgtxt_changedevice = _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.getByAjaxtext(DevVueOBJ.$store.state.sitecontents, 'pgtxt_changedevice');
      var dlgmtag = '';
      dlgmtag += '<div class="modal fade" id="' + this.name + '_modal" role="dialog">';
      dlgmtag += '<div class="modal-dialog modal-dialog-centered" style="min-width:320px;">';
      dlgmtag += '<div class="modal-content">';
      dlgmtag += '<div class="modal-header">';
      dlgmtag += '<div class="wes-theme-color data-ajax" data-ajax="pgtxt_changedevice" style="font-size: 20px; font-weight: 600;">' + pgtxt_changedevice + '</div>';
      dlgmtag += '<button type="button" class="close" data-dismiss="modal">&times;</button>';
      dlgmtag += '</div>';
      dlgmtag += '<div class="modal-body pt-0">';
      dlgmtag += '<div class="container-fluid p-0 m-0">';
      dlgmtag += '<div class="row m-2 mt-3">';
      var cnt_pgOfTab = this.pageDevices.split(',');
      var selectedword = this.selectedDevice;
      if (this.nowEventState == "" && selectedword == "") selectedword = this.pageDevices;
      var selectedword_s = [];

      for (var i = 0; i < selectedword.length; i++) {
        selectedword_s.push(selectedword.charAt(i));
      }

      var show_condion = -1;

      if (cnt_pgOfTab.length == 1) {
        if (selectedword_s.length == 1) show_condion = 0; //다른 장치추가조건 3개 모두 추가
        else if (selectedword_s.length == 2) show_condion = 1; //선택한장치가르기 및 없는 다른 장치추가조건
          else if (selectedword_s.length == 3) show_condion = 2; // 장치삭제조건
      } else if (cnt_pgOfTab.length == 2) {
        if (selectedword_s.length == 1) {
          if (cnt_pgOfTab[0].length == 1 && cnt_pgOfTab[1].length == 1) {
            show_condion = 3; //새 장치추가조건 례.선택한장치/없는장치
          }
        } else if (selectedword_s.length == 2) {
          show_condion = 4; //장치가르기 조건
        }
      }

      var colwords = [];

      for (var i = 0; i < this.devAllList.length; i++) {
        var dkey = this.devAllList[i].split(":")[0];
        var dval = this.devAllList[i].split(":")[1];

        if (show_condion == 0) {
          if (dkey == selectedword) {
            var obj = {
              state: 'active',
              val: this.devAllList[i]
            };
          } else {
            var obj = {
              state: '',
              val: this.devAllList[i]
            };
          }

          colwords.push(obj);
        } else if (show_condion == 1) {
          var flag = false;

          for (var ii = 0; ii < selectedword_s.length; ii++) {
            var st = selectedword_s[ii];

            if (dkey == st) {
              var obj = {
                state: 'active',
                val: this.devAllList[i]
              };
              colwords.push(obj);
              flag = true;
              break;
            }
          }

          if (!flag) {
            var obj = {
              state: '',
              val: this.devAllList[i]
            };
            colwords.push(obj);
          }
        } else if (show_condion == 2) {
          for (var ij = 0; ij < selectedword_s.length; ij++) {
            var st = selectedword_s[ij];

            if (dkey == st) {
              var obj = {
                state: 'active',
                val: this.devAllList[i]
              };
              colwords.push(obj);
              break;
            }
          }
        } else if (show_condion == 3) {
          var flag = false;
          var active = "";

          for (var ij = 0; ij < cnt_pgOfTab.length; ij++) {
            var st = cnt_pgOfTab[ij];

            if (dkey == st && selectedword_s[0] != st) {
              flag = true;
              break;
            }

            if (dkey == selectedword_s[0]) active = "active";
          }

          if (!flag) {
            var obj = {
              state: active,
              val: this.devAllList[i]
            };
            colwords.push(obj);
          }
        } else if (show_condion == 4) {
          for (var ii = 0; ii < selectedword_s.length; ii++) {
            var st = selectedword_s[ii];

            if (dkey == st) {
              var obj = {
                state: 'active',
                val: this.devAllList[i]
              };
              colwords.push(obj);
              break;
            }
          }
        }
      }

      var colcnt = colwords.length;
      var colcls = '12';
      if (colcnt == 1) colcls = '12';else if (colcnt == 2) colcls = '6';else if (colcnt == 3) colcls = '4';

      for (var jj = 0; jj < colcnt; jj++) {
        var k = colwords[jj].val.split(":")[0];
        var v = colwords[jj].val.split(":")[1];
        var state = colwords[jj].state;
        dlgmtag += '<div class="col-' + colcls + '">';
        dlgmtag += '<div class="d-flex flex-row justify-content-center align-items-center">';
        dlgmtag += '<div class="device-dlg-item-chk ' + state + '" data-cont="' + k + '"></div>';
        dlgmtag += '<div class="ml-3 d-flex flex-column">';
        var svgtag = '';

        if (k == 'M') {
          svgtag = '<svg version="1.1" id="Capa_1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="90px" height="90px"  viewBox="0 0 105 105" style="enable-background:new 0 0 90 90; max-height:100px!important" xml:space="preserve"><g><path d="M66.132,0H34.87c-5.692,0-10.306,4.614-10.306,10.307v80.387c0,5.692,4.614,10.307,10.306,10.307h31.262 c5.691,0,10.306-4.614,10.306-10.307V10.306C76.438,4.614,71.823,0,66.132,0z M65.188,6.25c0.759,0,1.375,0.615,1.375,1.375 c0,0.76-0.616,1.375-1.375,1.375s-1.375-0.615-1.375-1.375C63.813,6.865,64.429,6.25,65.188,6.25z M60.063,7.25 c0.414,0,0.75,0.336,0.75,0.75c0,0.414-0.336,0.75-0.75,0.75s-0.75-0.336-0.75-0.75C59.313,7.586,59.648,7.25,60.063,7.25z M57.626,7.25c0.414,0,0.75,0.336,0.75,0.75c0,0.414-0.336,0.75-0.75,0.75s-0.75-0.336-0.75-0.75 C56.876,7.586,57.212,7.25,57.626,7.25z M44.75,4.5h11.5c0.345,0,0.625,0.279,0.625,0.625c0,0.346-0.28,0.625-0.625,0.625h-11.5 c-0.345,0-0.625-0.279-0.625-0.625C44.125,4.779,44.405,4.5,44.75,4.5z M54.884,98.309h-8.766c-1.446,0-2.617-1.172-2.617-2.617h14 C57.501,97.137,56.329,98.309,54.884,98.309z M73.056,90.229h-45.11V10.77h45.11V90.229z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        } else if (k == 'T') {
          svgtag = '<svg version="1.1" id="Capa_1"  xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="90px"  height="90px" viewBox="0 0 105 105" style="enable-background:new 0 0 90 90; max-height:100px!important" xml:space="preserve"><g><path d="M87,0H20.5c-1.656,0-3,1.343-3,3v101.5c0,1.657,1.344,3,3,3H87c1.656,0,3-1.343,3-3V3C90,1.343,88.656,0,87,0z M53.75,103.75c-1.381,0-2.5-1.119-2.5-2.5s1.119-2.5,2.5-2.5s2.5,1.119,2.5,2.5S55.131,103.75,53.75,103.75z M86.333,96.416 H21.167V7.083h65.166V96.416z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        } else if (k == 'D') {
          svgtag = '<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="90px" height="90px" viewBox="0 0 120 105" style="enable-background:new 0 0 109.902 109.902;"\t xml:space="preserve"><g><path d="M106.654,15.087H3.252C1.459,15.087,0,16.545,0,18.338v57.297c0,0,0.002,0.002,0.002,0.004v2.863\t\tc0,1.059,0.857,1.916,1.914,1.916h42.32c-0.172,3.768-1.004,11.33-4.916,12.988c0,0-1.518,1.408,2.73,1.408h7.271h10.021h7.273\t\tc4.248,0,2.73-1.408,2.73-1.408c-3.912-1.658-4.746-9.221-4.916-12.988h43.594c1.061,0,1.871-0.857,1.871-1.916v-2.777\t\tc0-0.031,0.008-0.06,0.008-0.09V18.338C109.904,16.545,108.447,15.087,106.654,15.087z M52.869,79.786\t\tc0-0.895,0.725-1.619,1.619-1.619c0.895,0,1.619,0.725,1.619,1.619s-0.725,1.619-1.619,1.619 C53.594,81.405,52.869,80.681,52.869,79.786z M106.654,75.991H3.252V18.594c0-0.254,0.205-0.461,0.459-0.461h102.482\t\tc0.254,0,0.461,0.207,0.461,0.461V75.991z"/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>';
        }

        dlgmtag += '<div class="w-100">' + svgtag + '</div>';
        dlgmtag += '<div class="w-100" style="text-align: center; margin-top: 8px;">' + v + '</div>';
        dlgmtag += '</div>';
        dlgmtag += '</div>';
        dlgmtag += '</div>';
      }

      dlgmtag += '</div>';
      dlgmtag += '</div>';
      dlgmtag += '</div>';
      dlgmtag += '<div class="modal-footer" style="height: auto;justify-content:center;padding: 0.6rem!important;">';
      dlgmtag += '<button type="button" id="' + this.name + '_modal_save_btn" data-state="c" class="btn page1_custom_select_btn mb-sm-2 data-ajax" data-ajax="pgtxt_save" style="height: 35px; border-radius: 20px; padding: 0px 25px; float: right; display: block;">';
      dlgmtag += pgtxt_save;
      dlgmtag += '</button>';
      dlgmtag += '</div>';
      dlgmtag += '</div>';
      dlgmtag += '</div>';
      dlgmtag += '</div>';
      $("body").append(dlgmtag);
      $('#' + this.name + '_modal').modal('show');
      $('#' + this.name + '_modal').on('hidden.bs.modal', function (e) {
        $('#' + DevClsOBJ.name + '_modal').remove();
      });
      $(".device-dlg-item-chk").click(function () {
        if ($(this).hasClass('active')) $(this).removeClass('active');else $(this).addClass('active');
      });
      $('#' + this.name + '_modal_save_btn').click(function () {
        //process close event
        var st = $(this).data('state');
        var activekeylist = [];
        var deactivekeylist = [];
        $(".device-dlg-item-chk").each(function (index, item) {
          var k = $(item).data('cont');
          if ($(item).hasClass('active')) activekeylist.push(k);else deactivekeylist.push(k);
        });
        DevClsOBJ.pre_pageDevices = DevClsOBJ.pageDevices;
        var l_pageDevices = DevClsOBJ.pageDevices.split(",");
        var selectedword = DevClsOBJ.getSelectedDevice();

        if (selectedword != "" && activekeylist.length > 0) {
          if (activekeylist.length == 3) DevClsOBJ.pageDevices = "DMT";else {
            if (selectedword.length == 1) {
              if (l_pageDevices.length == 1) {
                if (activekeylist.length == 1) {
                  DevClsOBJ.pageDevices = activekeylist[0];
                } else if (activekeylist.length == 2) {
                  if (selectedword == activekeylist[0] || selectedword == activekeylist[1]) {
                    if (selectedword == activekeylist[0]) {
                      DevClsOBJ.pageDevices = selectedword + activekeylist[1];
                    } else {
                      DevClsOBJ.pageDevices = selectedword + activekeylist[0];
                    }
                  } else {
                    DevClsOBJ.pageDevices = activekeylist[0] + activekeylist[1];
                  }
                } else if (activekeylist.length == 3) {
                  DevClsOBJ.pageDevices = "DMT";
                }
              } else if (l_pageDevices.length == 2) {
                if (activekeylist.length == 1) {
                  if (l_pageDevices[0] == selectedword) {
                    l_pageDevices[0] = activekeylist[0];
                  } else if (l_pageDevices[1] == selectedword) {
                    l_pageDevices[1] = activekeylist[0];
                  }

                  DevClsOBJ.pageDevices = l_pageDevices.join(",");
                } else if (activekeylist.length == 2) {
                  if (l_pageDevices[0] == selectedword) {
                    l_pageDevices[0] = activekeylist.join("");
                  }

                  if (l_pageDevices[1] == selectedword) {
                    l_pageDevices[1] = activekeylist.join("");
                  }

                  DevClsOBJ.pageDevices = l_pageDevices.join(",");
                }
              }
            } else if (selectedword.length == 2) {
              if (l_pageDevices.length == 1) {
                if (activekeylist.length == 1) {
                  DevClsOBJ.pageDevices = activekeylist[0];
                }

                if (activekeylist.length == 2) {
                  DevClsOBJ.pageDevices = activekeylist.join("");
                }
              } else if (l_pageDevices.length == 2) {
                if (activekeylist.length == 1) {
                  DevClsOBJ.pageDevices.replace(activekeylist[0], "");

                  for (var i = 0; i < l_pageDevices.length; i++) {
                    var item = l_pageDevices[i];

                    if (item == selectedword) {
                      l_pageDevices[i] = activekeylist[0];
                      break;
                    }
                  }

                  DevClsOBJ.pageDevices = l_pageDevices.join(",");
                }
              }
            } else if (selectedword.length == 3) {
              if (l_pageDevices.length == 1) {
                if (activekeylist.length == 1) {
                  DevClsOBJ.pageDevices = activekeylist[0];
                } else if (activekeylist.length == 2) {
                  DevClsOBJ.pageDevices = activekeylist[0] + activekeylist[1];
                } else if (activekeylist.length == 3) {//3개인데 (DMT) 3개가 액티브이므로 필요없다.
                }
              }
            }
          }
          DevClsOBJ.nowEventState = "c";
          $('#' + DevClsOBJ.name + '_modal').modal('hide');

          if (DevClsOBJ.setDevicesToDB()) {
            DevClsOBJ.generateTag();
            if (DevVueOBJ != undefined && DevVueOBJ != null) DevVueOBJ.PageInitByDevice_Area();
          }
        } else {
          $('#' + DevClsOBJ.name + '_modal').modal('hide');
          if (DevClsOBJ.pageDevices.split(",").length == 0) _mjs_module__WEBPACK_IMPORTED_MODULE_0__["default"].data.showAlert('pgtxt_shouldonedevice');
        }
      });
    }
  }, {
    key: "setSelectedDevice",
    value: function setSelectedDevice(dev) {
      this.selectedDevice = dev; //M
      //console.log(dev);
    }
  }, {
    key: "getSelectedDevice",
    value: function getSelectedDevice() {
      return this.selectedDevice;
    }
  }, {
    key: "outputError",
    value: function outputError(txt) {
      console.log(txt);
    }
  }, {
    key: "isJson",
    value: function isJson() {
      try {
        JSON.parse(this.pageDevices);
      } catch (e) {
        return false;
      }

      return true;
    }
  }]);

  return DeviceArea;
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  data: {
    deviceCLS: deviceCLS
  }
});

/***/ })

}]);
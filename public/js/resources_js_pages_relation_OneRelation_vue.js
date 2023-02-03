"use strict";
(self["webpackChunk"] = self["webpackChunk"] || []).push([["resources_js_pages_relation_OneRelation_vue"],{

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'DatePicker',
  data: function data() {
    return {
      isDayListOpen: false,
      isMonthListOpen: false,
      isYearListOpen: false,
      monthList: ['Января', 'Февраля', 'Марта', 'Апреля', 'Мая', 'Июня', 'Июля', 'Августа', 'Сентября', 'Октября', 'Ноября', 'Декабря'],
      yearList: ['2023', '2024', '2025', '2026', '2027', '2028', '2029'],
      day: '',
      month: '',
      year: ''
    };
  },
  methods: {
    toggleDayList: function toggleDayList() {
      this.isDayListOpen = !this.isDayListOpen;
      this.isMonthListOpen = false;
      this.isYearListOpen = false;
    },
    toggleMonthList: function toggleMonthList() {
      this.isMonthListOpen = !this.isMonthListOpen;
      this.isDayListOpen = false;
      this.isYearListOpen = false;
    },
    toggleYearList: function toggleYearList() {
      this.isYearListOpen = !this.isYearListOpen;
      this.isDayListOpen = false;
      this.isMonthListOpen = false;
    },
    selectDay: function selectDay(day) {
      this.day = day;
      this.$emit('updateDay', this.day);
      this.isDayListOpen = false;
    },
    selectMonth: function selectMonth(month) {
      this.month = month;
      this.$emit('updateMonth', this.month);
      this.isMonthListOpen = false;
    },
    selectYear: function selectYear(year) {
      this.year = year;
      this.$emit('updateYear', this.year);
      this.isYearListOpen = false;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PrintBackSide',
  data: function data() {
    return {
      linesCount: 17
    };
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'PrintDocument',
  props: ['relationId', 'model', 'number', 'fuel', 'last_name', 'first_name', 'middle_name', 'person_number', 'driver_license', 'mechanic', 'dispetcher', 'waybillNumber', 'date', 'customer', 'address'],
  computed: {
    mechanicName: function mechanicName() {
      if (this.mechanic.last_name) {
        return "".concat(this.mechanic.last_name, " ").concat(this.mechanic.first_name[0], ".").concat(this.mechanic.middle_name[0], ".");
      }
      return '';
    },
    dispetcherName: function dispetcherName() {
      if (this.dispetcher.last_name) {
        return "".concat(this.dispetcher.last_name, " ").concat(this.dispetcher.first_name[0], ".").concat(this.dispetcher.middle_name[0], ".");
      }
      return '';
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_PrintDocument_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../components/PrintDocument.vue */ "./resources/js/components/PrintDocument.vue");
/* harmony import */ var _components_PrintBackSide_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../components/PrintBackSide.vue */ "./resources/js/components/PrintBackSide.vue");
/* harmony import */ var _components_DatePicker_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../components/DatePicker.vue */ "./resources/js/components/DatePicker.vue");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: 'OneRelation',
  components: {
    PrintDocument: _components_PrintDocument_vue__WEBPACK_IMPORTED_MODULE_0__["default"],
    PrintBackSide: _components_PrintBackSide_vue__WEBPACK_IMPORTED_MODULE_1__["default"],
    DatePicker: _components_DatePicker_vue__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  props: ['relationId'],
  data: function data() {
    return {
      errored: false,
      loading: true,
      isPrintOpen: false,
      isPrintBackOpen: false,
      isMechanicListOpen: false,
      isDispetcherListOpen: false,
      isSameDate: false,
      relation: {},
      car: {},
      driver: {},
      mechanicList: [],
      dispetcherList: [],
      waybillNumber: '',
      dateFrom: {
        day: '',
        month: '',
        year: ''
      },
      dateTo: {
        day: '',
        month: '',
        year: ''
      },
      customer: 'ООО АК "Волга-Днепр"',
      address: 'г. Ульяновск, ул. Карбышева, д. 14',
      selectedMechanic: {
        last_name: 'Братышев',
        first_name: 'Александр',
        middle_name: 'Сергеевич'
      },
      selectedDispetcher: {
        last_name: 'Асташов',
        first_name: 'Дмитирий',
        middle_name: 'Васильевич'
      }
    };
  },
  computed: {
    mechanicFullName: function mechanicFullName() {
      if (this.selectedMechanic.last_name) {
        return "".concat(this.selectedMechanic.last_name, " ").concat(this.selectedMechanic.first_name, " ").concat(this.selectedMechanic.middle_name);
      }
      return '';
    },
    dispetcherFullName: function dispetcherFullName() {
      if (this.selectedDispetcher.last_name) {
        return "".concat(this.selectedDispetcher.last_name, " ").concat(this.selectedDispetcher.first_name, " ").concat(this.selectedDispetcher.middle_name);
      }
      return '';
    }
  },
  methods: {
    makeSameDate: function makeSameDate() {
      this.dateTo = this.dateFrom;
      this.isSameDate = true;
    },
    makeDiffDate: function makeDiffDate() {
      this.dateTo = {};
      this.isSameDate = false;
    },
    updateDayFrom: function updateDayFrom(day) {
      this.dateFrom.day = day;
    },
    updateMonthFrom: function updateMonthFrom(month) {
      this.dateFrom.month = month;
    },
    updateYearFrom: function updateYearFrom(year) {
      this.dateFrom.year = year;
    },
    updateDayTo: function updateDayTo(day) {
      this.dateTo.day = day;
    },
    updateMonthTo: function updateMonthTo(month) {
      this.dateTo.month = month;
    },
    updateYearTo: function updateYearTo(year) {
      this.dateTo.year = year;
    },
    goBack: function goBack() {
      this.$router.go(-1);
    },
    formatDate: function formatDate(dateFrom, dateTo) {
      var day = '';
      var month = '';
      var year = '';
      if (dateTo.day !== dateFrom.day) {
        day = dateFrom.day + '-' + dateTo.day;
      } else day = dateFrom.day;
      if (dateTo.month !== dateFrom.month) {
        month = dateFrom.month + '-' + dateTo.month;
      } else month = dateFrom.month;
      if (dateTo.year !== dateFrom.year) {
        year = dateFrom.year + '-' + dateTo.year;
      } else year = dateFrom.year;
      return {
        day: day,
        month: month,
        year: year
      };
    },
    selectMechanic: function selectMechanic(mechanic) {
      this.selectedMechanic = mechanic;
      this.isMechanicListOpen = false;
    },
    selectDispetcher: function selectDispetcher(dispetcher) {
      this.selectedDispetcher = dispetcher;
      this.isDispetcherListOpen = false;
    },
    toggleMechanicList: function toggleMechanicList() {
      this.isMechanicListOpen = !this.isMechanicListOpen;
    },
    toggleDispetcherList: function toggleDispetcherList() {
      this.isDispetcherListOpen = !this.isDispetcherListOpen;
    },
    getAllMechanics: function getAllMechanics() {
      var _this = this;
      axios.get('/api/V1/drivers').then(function (response) {
        var driverList = response.data.data;
        _this.mechanicList = _this.selectAllMechanics(driverList);
        _this.dispetcherList = _this.mechanicList;
      })["catch"](function (error) {
        console.log(error);
        _this.errored = true;
      })["finally"](function () {
        _this.loading = false;
      });
    },
    togglePrintDocument: function togglePrintDocument() {
      this.isPrintOpen = !this.isPrintOpen;
    },
    togglePrintBack: function togglePrintBack() {
      this.isPrintBackOpen = !this.isPrintBackOpen;
    },
    printDocument: function printDocument() {
      var body = document.querySelector('body');
      var bodyContent = body.innerHTML;
      var el = document.querySelector('.print');
      body.innerHTML = el.innerHTML;
      window.print();
      body.innerHTML = bodyContent;
      this.$router.go();
    },
    printBackSide: function printBackSide() {
      var body = document.querySelector('body');
      var bodyContent = body.innerHTML;
      var el = document.querySelector('.print-back');
      body.innerHTML = el.innerHTML;
      window.print();
      body.innerHTML = bodyContent;
      this.$router.go();
    },
    getOneRelation: function getOneRelation() {
      var _this2 = this;
      axios.get('/api/V1/relations/' + this.relationId).then(function (response) {
        _this2.relation = response.data.data;
        _this2.getCar(_this2.relation.car_id);
        _this2.getDriver(_this2.relation.driver_id);
      })["catch"](function (error) {
        console.log(error);
        _this2.errored = true;
      })["finally"](function () {
        _this2.loading = false;
      });
    },
    getCar: function getCar(id) {
      var _this3 = this;
      axios.get('/api/V1/cars/' + id).then(function (response) {
        _this3.car = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        _this3.errored = true;
      })["finally"](function () {
        _this3.loading = false;
      });
    },
    getDriver: function getDriver(id) {
      var _this4 = this;
      axios.get('/api/V1/drivers/' + id).then(function (response) {
        _this4.driver = response.data.data;
      })["catch"](function (error) {
        console.log(error);
        _this4.errored = true;
      })["finally"](function () {
        _this4.loading = false;
      });
    },
    selectAllMechanics: function selectAllMechanics(drivers) {
      var mechanics = [];
      drivers.map(function (driver) {
        if (driver.is_mechanic) {
          mechanics.push(driver);
        }
      });
      return mechanics;
    }
  },
  mounted: function mounted() {
    this.getOneRelation();
    this.getAllMechanics();
  }
});

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".date-picker[data-v-fa816ef2] {\n  display: flex;\n}\n.date-picker__item[data-v-fa816ef2] {\n  margin-right: 8px;\n}\n.date-picker__day[data-v-fa816ef2] {\n  width: 40px;\n}\n.date-picker__month[data-v-fa816ef2] {\n  width: 100px;\n}\n.date-picker__year[data-v-fa816ef2] {\n  width: 60px;\n}\n.date-picker__drop-day[data-v-fa816ef2] {\n  width: 55px;\n}\n.date-picker__drop-month[data-v-fa816ef2] {\n  width: 115px;\n}\n.date-picker__drop-year[data-v-fa816ef2] {\n  width: 75px;\n}\n.date-picker input[data-v-fa816ef2] {\n  width: 100%;\n  height: 32px;\n  font-size: 16px;\n  color: rgb(0, 76, 143);\n  text-align: center;\n  border-radius: 4px;\n  border: none;\n  outline: none;\n}\n.date-picker input[data-v-fa816ef2]::-moz-placeholder {\n  font-size: 12px;\n}\n.date-picker input[data-v-fa816ef2]::placeholder {\n  font-size: 12px;\n}\n.date-picker ul[data-v-fa816ef2] {\n  position: absolute;\n  z-index: 2;\n  background-color: #fff;\n  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.4);\n  text-align: center;\n  color: rgb(0, 76, 143);\n  height: 150px;\n  overflow: hidden;\n  overflow-y: scroll;\n}\n.date-picker li[data-v-fa816ef2]:hover {\n  background-color: rgb(150, 189, 213);\n  color: white;\n  cursor: pointer;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".back-side-list-of-paper[data-v-dc491a60] {\n  display: flex;\n  justify-content: flex-end;\n  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);\n  width: 1270px;\n  margin: 0 auto;\n}\n.align-button[data-v-dc491a60] {\n  margin: 0 auto;\n}\n.print-header-back[data-v-dc491a60] {\n  background-color: rgba(90, 140, 162, 0.454);\n  height: 10px;\n}\n.document-back-side[data-v-dc491a60] {\n  position: relative;\n  background-color: rgb(255, 255, 255);\n  color: black;\n  width: 540px;\n  margin-left: 570px;\n  height: 734px;\n  padding: 0 12px;\n}\n.document-back-side img[data-v-dc491a60] {\n  width: 100%;\n  height: auto;\n}\n.back-side-top-devider[data-v-dc491a60] {\n  height: 48px;\n}\n.back-side-top-label[data-v-dc491a60] {\n  text-align: end;\n  font-size: 12px;\n  padding-right: 2px;\n}\n.table[data-v-dc491a60] {\n  display: flex;\n  border-color: black;\n  border-style: solid;\n  border-width: 1.5px 1.5px 0 1.5px;\n}\n.table-number[data-v-dc491a60] {\n  flex-basis: 26px;\n  height: 100%;\n  border-right: 1.5px solid black;\n}\n.table-number__header[data-v-dc491a60] {\n  height: 78px;\n  line-height: 11px;\n  width: 100%;\n  text-align: center;\n  writing-mode: vertical-rl;\n  transform: scale(-1);\n  font-size: 9px;\n  border-top: 1.5px solid black;\n}\n.table-number__value[data-v-dc491a60] {\n  border-bottom: 1.5px solid black;\n  height: 31px;\n  text-align: center;\n  line-height: 31px;\n  font-size: 10px;\n}\n.table-place[data-v-dc491a60] {\n  flex-basis: 225px;\n  height: 100%;\n  border-right: 1.5px solid black;\n}\n.table-place__header[data-v-dc491a60] {\n  height: 25px;\n  font-size: 10px;\n  line-height: 25px;\n  text-align: center;\n  border-bottom: 1.5px solid black;\n}\n.table-place__columns[data-v-dc491a60] {\n  display: flex;\n}\n.table-place__departure[data-v-dc491a60] {\n  width: 50%;\n  border-right: 1.5px solid black;\n}\n.table-place__departure-header[data-v-dc491a60] {\n  height: 53px;\n  line-height: 53px;\n  font-size: 10px;\n  text-align: center;\n  border-bottom: 1.5px solid black;\n}\n.table-place__departure-value[data-v-dc491a60] {\n  height: 31px;\n  border-bottom: 1.5px solid black;\n}\n.table-place__arrive[data-v-dc491a60] {\n  width: 50%;\n}\n.table-place__arrive-header[data-v-dc491a60] {\n  height: 53px;\n  line-height: 53px;\n  font-size: 10px;\n  text-align: center;\n  border-bottom: 1.5px solid black;\n}\n.table-place__arrive-value[data-v-dc491a60] {\n  height: 31px;\n  border-bottom: 1.5px solid black;\n}\n.table-time[data-v-dc491a60] {\n  border-right: 1.5px solid black;\n  flex-basis: 148px;\n}\n.table-time__header[data-v-dc491a60] {\n  height: 25px;\n  font-size: 10px;\n  line-height: 25px;\n  text-align: center;\n  border-bottom: 1.5px solid black;\n}\n.table-time__columns[data-v-dc491a60] {\n  display: flex;\n}\n.table-time__departure[data-v-dc491a60] {\n  width: 50%;\n  border-right: 1.5px solid black;\n}\n.table-time__departure-header[data-v-dc491a60] {\n  height: 27px;\n  font-size: 10px;\n  text-align: center;\n  line-height: 27px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__departure-columns[data-v-dc491a60] {\n  display: flex;\n}\n.table-time__departure-hours[data-v-dc491a60] {\n  width: 50%;\n  border-right: 1.5px solid black;\n}\n.table-time__departure-hours-header[data-v-dc491a60] {\n  font-size: 10px;\n  text-align: center;\n  height: 26px;\n  line-height: 26px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__departure-hours-value[data-v-dc491a60] {\n  height: 31px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__departure-minutes[data-v-dc491a60] {\n  width: 50%;\n}\n.table-time__departure-minutes-header[data-v-dc491a60] {\n  font-size: 10px;\n  text-align: center;\n  height: 26px;\n  line-height: 26px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__departure-minutes-value[data-v-dc491a60] {\n  height: 31px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__arrive[data-v-dc491a60] {\n  width: 50%;\n}\n.table-time__arrive-header[data-v-dc491a60] {\n  height: 27px;\n  font-size: 10px;\n  text-align: center;\n  line-height: 27px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__arrive-columns[data-v-dc491a60] {\n  display: flex;\n}\n.table-time__arrive-hours[data-v-dc491a60] {\n  width: 50%;\n  border-right: 1.5px solid black;\n}\n.table-time__arrive-hours-header[data-v-dc491a60] {\n  font-size: 10px;\n  text-align: center;\n  height: 26px;\n  line-height: 26px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__arrive-hours-value[data-v-dc491a60] {\n  height: 31px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__arrive-minutes[data-v-dc491a60] {\n  width: 50%;\n}\n.table-time__arrive-minutes-header[data-v-dc491a60] {\n  font-size: 10px;\n  text-align: center;\n  height: 26px;\n  line-height: 26px;\n  border-bottom: 1.5px solid black;\n}\n.table-time__arrive-minutes-value[data-v-dc491a60] {\n  height: 31px;\n  border-bottom: 1.5px solid black;\n}\n.table-distance[data-v-dc491a60] {\n  width: 56px;\n  height: 100%;\n  border-right: 1.5px solid black;\n}\n.table-distance__header[data-v-dc491a60] {\n  height: 78px;\n  font-size: 9px;\n  text-align: center;\n  padding-top: 25px;\n  border-bottom: 1.5px solid black;\n}\n.table-distance__value[data-v-dc491a60] {\n  border-bottom: 1.5px solid black;\n  height: 31px;\n}\n.table-signature[data-v-dc491a60] {\n  flex-grow: 1;\n  height: 100%;\n}\n.table-signature__header[data-v-dc491a60] {\n  height: 78px;\n  font-size: 9px;\n  line-height: 11px;\n  text-align: center;\n  padding-top: 4px;\n  border-bottom: 1.5px solid black;\n}\n.table-signature__value[data-v-dc491a60] {\n  border-bottom: 1.5px solid black;\n  height: 31px;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".align-button[data-v-5b96528d] {\n  margin: 0 auto;\n}\n.modal[data-v-5b96528d] {\n  display: flex;\n  justify-content: center;\n}\n.list-of-paper[data-v-5b96528d] {\n  box-shadow: 1px 1px 5px 2px rgba(0, 0, 0, 0.2);\n  background-color: #fff;\n  width: -moz-fit-content;\n  width: fit-content;\n  height: -moz-fit-content;\n  height: fit-content;\n  margin-bottom: 16px;\n}\n.print-header[data-v-5b96528d] {\n  height: 30px;\n  width: 550px;\n}\n.print-footer[data-v-5b96528d] {\n  height: 20px;\n  width: 550px;\n}\n.document[data-v-5b96528d] {\n  margin-left: 20px;\n  background-color: rgb(255, 255, 255);\n  color: black;\n  width: 526px;\n  height: 734px;\n}\n.stamp-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 41px;\n}\n.stamp-block p[data-v-5b96528d] {\n  text-align: center;\n  font-size: 10px;\n  width: 177px;\n  height: 30px;\n}\n.title-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 41px;\n  font-size: 13px;\n}\n.title-block h1[data-v-5b96528d] {\n  font-size: inherit;\n  text-align: start;\n  margin: 0;\n  margin-right: 16px;\n}\n.title-block__series[data-v-5b96528d] {\n  width: 85px;\n  border-bottom: 1px solid black;\n  margin-right: 6px;\n}\n.title-block__number[data-v-5b96528d] {\n  width: 75px;\n  border-bottom: 1px solid black;\n  text-align: center;\n  margin-left: 4px;\n}\n.date-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 16px;\n  font-size: 12px;\n  font-weight: 700;\n}\n.date-block__day[data-v-5b96528d] {\n  width: 38px;\n  text-align: center;\n  border-bottom: 1px solid black;\n}\n.date-block__month[data-v-5b96528d] {\n  width: 140px;\n  text-align: center;\n  border-bottom: 1px solid black;\n  margin-left: 6px;\n}\n.date-block__year[data-v-5b96528d] {\n  width: 75px;\n  text-align: end;\n  padding-right: 4px;\n  border-bottom: 1px solid black;\n}\n.date-block__series-label[data-v-5b96528d] {\n  font-weight: 500;\n  width: 150px;\n  text-align: center;\n  align-self: flex-start;\n  font-size: 7px;\n}\n.company-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 32px;\n  font-size: 9px;\n}\n.company-block__label[data-v-5b96528d] {\n  margin-right: 25px;\n  align-self: center;\n}\n.company-block__info[data-v-5b96528d] {\n  text-align: center;\n  border-bottom: 1px solid black;\n}\n.company-labels-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-right: 100px;\n  height: 12px;\n  font-size: 8px;\n}\n.model-block[data-v-5b96528d] {\n  display: flex;\n  height: 26px;\n}\n.model-block__label[data-v-5b96528d] {\n  align-self: center;\n  font-size: 9px;\n  margin-right: 16px;\n  margin-bottom: -8px;\n}\n.model-block__type[data-v-5b96528d] {\n  font-size: 14px;\n  font-weight: 700;\n  width: 140px;\n  text-align: end;\n  padding-right: 12px;\n  align-self: flex-end;\n  border-bottom: 1px solid black;\n}\n.model-block__model[data-v-5b96528d] {\n  font-size: 14px;\n  font-weight: 700;\n  min-width: 160px;\n  text-align: start;\n  align-self: flex-end;\n  border-bottom: 1px solid black;\n}\n.car-number-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 16px;\n}\n.car-number-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 14px;\n  align-self: center;\n}\n.car-number-block__number[data-v-5b96528d] {\n  line-height: 16px;\n  font-size: 13px;\n  font-weight: 700;\n  width: 155px;\n  text-align: center;\n  border-bottom: 1px solid black;\n}\n.driver-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 16px;\n}\n.driver-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 6px;\n  align-self: center;\n}\n.driver-block__name[data-v-5b96528d] {\n  line-height: 15px;\n  font-size: 14px;\n  font-weight: 700;\n  width: 270px;\n  text-align: start;\n  padding-left: 4px;\n  margin-right: 24px;\n  border-bottom: 1px solid black;\n  white-space: nowrap;\n}\n.driver-block__label-2[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 4px;\n  align-self: center;\n}\n.driver-block__person-number[data-v-5b96528d] {\n  border: 2.5px solid black;\n  height: 18px;\n  line-height: 15px;\n  flex-grow: 1;\n  font-size: 12px;\n  align-self: center;\n  text-align: center;\n}\n.driver-labels-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-start;\n  justify-content: center;\n  padding-right: 140px;\n  height: 12px;\n  font-size: 8px;\n}\n.license-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 13px;\n}\n.license-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  line-height: 9px;\n  margin-right: 24px;\n  align-self: center;\n}\n.license-block__number[data-v-5b96528d] {\n  width: 220px;\n  border-bottom: 1px solid black;\n  font-size: 12px;\n  line-height: 12px;\n  font-weight: 700;\n  margin-right: 16px;\n  padding-left: 8px;\n}\n.license-block__label-2[data-v-5b96528d] {\n  font-size: 9px;\n  line-height: 9px;\n  align-self: center;\n  margin-right: 14px;\n}\n.license-block__class[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  flex-grow: 1;\n}\n.big-bottom-block[data-v-5b96528d] {\n  display: flex;\n  height: 530px;\n}\n.big-bottom-block__left[data-v-5b96528d] {\n  width: 270px;\n  height: 100%;\n  padding-right: 5px;\n}\n.big-bottom-block__right[data-v-5b96528d] {\n  height: 100%;\n  padding-left: 5px;\n  flex-grow: 1;\n}\n.license-card-block[data-v-5b96528d] {\n  display: flex;\n  align-items: center;\n  height: 21px;\n}\n.license-card-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 14px;\n}\n.license-card-block__right[data-v-5b96528d] {\n  flex-grow: 1;\n  text-align: center;\n}\n.license-card-block__value[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  font-size: 9px;\n}\n.license-card-block__value-label[data-v-5b96528d] {\n  font-size: 8px;\n}\n.task-header-block[data-v-5b96528d] {\n  height: 39px;\n  text-align: center;\n  vertical-align: bottom;\n  font-size: 12px;\n  font-weight: 700;\n  padding-top: 18px;\n}\n.customer-block[data-v-5b96528d] {\n  display: flex;\n  align-items: center;\n  height: 36px;\n}\n.customer-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 8px;\n}\n.customer-block__right[data-v-5b96528d] {\n  flex-grow: 1;\n  text-align: center;\n}\n.customer-block__value[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  font-size: 14px;\n  font-weight: 700;\n}\n.customer-block__value-label[data-v-5b96528d] {\n  font-size: 8px;\n}\n.organization-block[data-v-5b96528d] {\n  height: 35px;\n  padding-top: 5px;\n  text-align: center;\n  width: 170px;\n}\n.organization-block__value[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  font-size: 9px;\n  font-weight: 700;\n}\n.organization-block__value-label[data-v-5b96528d] {\n  font-size: 8px;\n}\n.customer-address-block[data-v-5b96528d] {\n  height: 51px;\n}\n.customer-address-block__label-block[data-v-5b96528d] {\n  display: flex;\n  height: 21px;\n}\n.customer-address-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 16px;\n  padding-top: 8px;\n}\n.customer-address-block__value[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  font-size: 8px;\n  flex-grow: 1;\n}\n.customer-address-block__value-2[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  text-align: center;\n  height: 14px;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 13px;\n  flex-grow: 1;\n}\n.customer-address-block__value-3[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  height: 14px;\n  font-size: 13px;\n  font-weight: 700;\n  line-height: 13px;\n  flex-grow: 1;\n}\n.departure-time-block[data-v-5b96528d] {\n  display: flex;\n  align-items: center;\n  height: 32px;\n  padding-left: 29px;\n}\n.departure-time-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 24px;\n  font-weight: 700;\n}\n.departure-time-block__value[data-v-5b96528d] {\n  flex-grow: 1;\n  height: 32px;\n  border: 2.5px solid black;\n}\n.dispetcher-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 35px;\n}\n.dispetcher-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 10px;\n  align-self: center;\n}\n.dispetcher-block__signature-block[data-v-5b96528d] {\n  margin-right: 16px;\n}\n.dispetcher-block__signature-value[data-v-5b96528d] {\n  width: 54px;\n  border-bottom: 1px solid black;\n}\n.dispetcher-block__signature-label[data-v-5b96528d] {\n  font-size: 8px;\n  text-align: center;\n}\n.dispetcher-block__name-block[data-v-5b96528d] {\n  flex-grow: 1;\n}\n.dispetcher-block__name-value[data-v-5b96528d] {\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n  border-bottom: 1px solid black;\n}\n.dispetcher-block__name-label[data-v-5b96528d] {\n  font-size: 8px;\n  text-align: center;\n}\n.arrive-time-block[data-v-5b96528d] {\n  display: flex;\n  align-items: center;\n  height: 36px;\n  padding-left: 15px;\n}\n.arrive-time-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 15px;\n  font-weight: 700;\n}\n.arrive-time-block__value[data-v-5b96528d] {\n  flex-grow: 1;\n  height: 32px;\n  border: 2.5px solid black;\n}\n.divider-block[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  height: 20px;\n}\n.comments-block__label[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  font-size: 8px;\n  text-align: center;\n  height: 28px;\n}\n.comments-block__value[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  height: 14px;\n  font-size: 8px;\n}\n.logistic-block__routes[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  height: 14px;\n  font-size: 8px;\n  padding-left: 2px;\n}\n.logistic-block__payload[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  height: 14px;\n  font-size: 8px;\n  padding-left: 2px;\n}\n.finish-drive-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 37px;\n}\n.finish-drive-block__label[data-v-5b96528d] {\n  font-size: 8px;\n  text-align: end;\n  width: 70px;\n  margin-right: 30px;\n}\n.finish-drive-block__value-1[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  margin-right: 20px;\n  width: 54px;\n}\n.finish-drive-block__value-2[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n  flex-grow: 1;\n}\n.bottom-labels-block[data-v-5b96528d] {\n  display: flex;\n  height: 30px;\n}\n.bottom-labels-block__stamp-place[data-v-5b96528d] {\n  align-self: flex-end;\n  font-size: 9px;\n  text-align: end;\n  width: 70px;\n  margin-right: 30px;\n  padding-right: 10px;\n}\n.bottom-labels-block__label-1[data-v-5b96528d] {\n  text-align: center;\n  margin-right: 20px;\n  width: 54px;\n  font-size: 8px;\n}\n.bottom-labels-block__label-2[data-v-5b96528d] {\n  text-align: center;\n  flex-grow: 1;\n  font-size: 8px;\n}\n.mechanic-check-title[data-v-5b96528d] {\n  height: 25px;\n  font-size: 11px;\n  text-align: center;\n  padding-top: 8px;\n}\n.odometer-departure-block[data-v-5b96528d] {\n  display: flex;\n  align-items: center;\n  height: 22px;\n  margin-bottom: 3px;\n}\n.odometer-departure-block__label[data-v-5b96528d] {\n  font-size: 10px;\n  width: 150px;\n  text-align: center;\n}\n.odometer-departure-block__value[data-v-5b96528d] {\n  height: 100%;\n  flex-grow: 1;\n  border: 2.5px solid black;\n}\n.mechanic-departure-block[data-v-5b96528d] {\n  border: 1px solid black;\n}\n.mechanic-departure-block p[data-v-5b96528d] {\n  text-align: center;\n  font-size: 9px;\n}\n.mechanic-departure-block h3[data-v-5b96528d] {\n  text-align: center;\n  font-size: 9px;\n  text-transform: uppercase;\n}\n.mechanic-departure-block__date[data-v-5b96528d] {\n  display: flex;\n  justify-content: center;\n  height: 15px;\n  font-size: 9px;\n  padding-top: 4px;\n}\n.mechanic-departure-block__date div[data-v-5b96528d] {\n  border-bottom: 1px solid black;\n}\n.mechanic-departure-block__date p[data-v-5b96528d] {\n  margin: 0 1px;\n}\n.mechanic-departure-block__day[data-v-5b96528d] {\n  width: 28px;\n}\n.mechanic-departure-block__month[data-v-5b96528d] {\n  width: 38px;\n  margin-left: 4px;\n  margin-right: 2px;\n}\n.mechanic-departure-block__year[data-v-5b96528d] {\n  width: 20px;\n  margin-left: 2px;\n}\n.mechanic-departure-block__hours[data-v-5b96528d] {\n  width: 18px;\n  margin-left: 4px;\n}\n.mechanic-departure-block__minutes[data-v-5b96528d] {\n  width: 18px;\n  margin-left: 2px;\n}\n.mechanic-departure-block__signature[data-v-5b96528d] {\n  height: 25px;\n  text-align: end;\n  padding-right: 8px;\n  padding-top: 8px;\n  font-size: 13px;\n  font-weight: 700;\n  border-bottom: 1px solid black;\n}\n.mechanic-departure-block__labels[data-v-5b96528d] {\n  display: flex;\n  height: 12px;\n  text-align: end;\n  font-size: 8px;\n}\n.mechanic-departure-block__label-1[data-v-5b96528d] {\n  text-align: center;\n  width: 140px;\n}\n.mechanic-departure-block__label-2[data-v-5b96528d] {\n  text-align: center;\n  flex-grow: 1;\n}\n.driver-check-title p[data-v-5b96528d] {\n  text-align: center;\n  font-size: 11px;\n  width: 160px;\n  margin: 0 auto;\n  line-height: 11px;\n}\n.driver-check-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 28px;\n  margin-bottom: 3px;\n}\n.driver-check-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 14px;\n  align-self: center;\n}\n.driver-check-block__signature-block[data-v-5b96528d] {\n  margin-right: 16px;\n}\n.driver-check-block__signature-value[data-v-5b96528d] {\n  width: 62px;\n  border-bottom: 1px solid black;\n}\n.driver-check-block__signature-label[data-v-5b96528d] {\n  font-size: 8px;\n  text-align: center;\n}\n.driver-check-block__name-block[data-v-5b96528d] {\n  flex-grow: 1;\n}\n.driver-check-block__name-value[data-v-5b96528d] {\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n  border-bottom: 1px solid black;\n}\n.driver-check-block__name-label[data-v-5b96528d] {\n  font-size: 8px;\n  text-align: center;\n}\n.fuel-type-block[data-v-5b96528d] {\n  display: flex;\n  height: 50px;\n}\n.fuel-type-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  width: 95px;\n  padding-top: 7px;\n}\n.fuel-type-block__type[data-v-5b96528d] {\n  font-size: 8px;\n  width: 75px;\n}\n.fuel-type-block__type-title[data-v-5b96528d] {\n  text-align: center;\n  height: 15px;\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 0 1px 1px;\n}\n.fuel-type-block__type-value[data-v-5b96528d] {\n  text-align: center;\n  height: 15px;\n  border-color: black;\n  border-style: solid;\n  border-width: 0 0 1px 1px;\n}\n.fuel-type-block__code[data-v-5b96528d] {\n  font-size: 8px;\n  flex-grow: 1;\n}\n.fuel-type-block__code-title[data-v-5b96528d] {\n  text-align: center;\n  height: 15px;\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 1px 2.5px 1px;\n}\n.fuel-type-block__code-value[data-v-5b96528d] {\n  text-align: center;\n  height: 15px;\n}\n.fuel-type-block__code-value[data-v-5b96528d]:not(:last-child) {\n  border-color: black;\n  border-style: solid;\n  border-width: 0 2.5px 1px 2.5px;\n}\n.fuel-type-block__code-value[data-v-5b96528d]:last-child {\n  border-color: black;\n  border-style: solid;\n  border-width: 0 2.5px 2.5px 2.5px;\n}\n.fuel-check-title[data-v-5b96528d] {\n  font-size: 10px;\n  font-weight: 700;\n  text-align: center;\n  margin-bottom: 10px;\n}\n.fuel-check-section[data-v-5b96528d] {\n  display: flex;\n}\n.fuel-check-section__left[data-v-5b96528d] {\n  height: 100%;\n  width: 170px;\n  font-size: 9px;\n}\n.fuel-check-section__left-title[data-v-5b96528d] {\n  height: 17px;\n  text-align: center;\n}\n.fuel-check-section__left-recieved[data-v-5b96528d] {\n  position: relative;\n  height: 34px;\n  font-size: 9px;\n  padding-right: 45px;\n}\n.fuel-check-section__left-recieved div[data-v-5b96528d] {\n  text-align: center;\n  height: 13px;\n  margin-top: -3px;\n}\n.fuel-check-section__left-doc-number[data-v-5b96528d] {\n  position: absolute;\n  left: 0;\n  bottom: 0;\n  display: inline-block;\n  height: 13px;\n  line-height: 13px;\n  margin-right: 4px;\n  padding-left: 8px;\n}\n.fuel-check-section__left-devider[data-v-5b96528d] {\n  display: inline-block;\n  height: 14px;\n  width: 60px;\n  margin-left: 51px;\n  border-bottom: 1px solid black;\n}\n.fuel-check-section__left-rest-before[data-v-5b96528d] {\n  height: 24px;\n  padding-top: 11px;\n}\n.fuel-check-section__left-rest-after[data-v-5b96528d] {\n  height: 21px;\n  padding-top: 9px;\n  text-align: end;\n  padding-right: 16px;\n}\n.fuel-check-section__left-spent-norm[data-v-5b96528d] {\n  height: 14px;\n}\n.fuel-check-section__left-spent-fact[data-v-5b96528d] {\n  height: 14px;\n  text-align: end;\n  padding-right: 16px;\n}\n.fuel-check-section__left-economy[data-v-5b96528d] {\n  height: 14px;\n}\n.fuel-check-section__left-spent-over[data-v-5b96528d] {\n  height: 14px;\n}\n.fuel-check-section__right[data-v-5b96528d] {\n  background-color: rgb(255, 255, 255);\n  height: 100%;\n  flex-grow: 1;\n}\n.fuel-check-section__right-title[data-v-5b96528d] {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 1px 0 1px;\n  height: 17px;\n  font-size: 10px;\n  text-align: center;\n}\n.fuel-check-section__right-recieved[data-v-5b96528d] {\n  border-color: black;\n  border-style: solid;\n  border-width: 2.5px 2.5px 0 2.5px;\n  height: 34px;\n}\n.fuel-check-section__right-rest-before[data-v-5b96528d] {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 2.5px 0 2.5px;\n  height: 21px;\n}\n.fuel-check-section__right-rest-after[data-v-5b96528d] {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 2.5px 0 2.5px;\n  height: 21px;\n}\n.fuel-check-section__right-spent-norm[data-v-5b96528d] {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 2.5px 0 2.5px;\n  height: 14px;\n}\n.fuel-check-section__right-spent-fact[data-v-5b96528d] {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 2.5px 0 2.5px;\n  height: 14px;\n}\n.fuel-check-section__right-economy[data-v-5b96528d] {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 2.5px 0 2.5px;\n  height: 14px;\n}\n.fuel-check-section__right-spent-over[data-v-5b96528d] {\n  border-color: black;\n  border-style: solid;\n  border-width: 1px 2.5px 2.5px 2.5px;\n  height: 14px;\n}\n.odometer-arrive-block[data-v-5b96528d] {\n  margin-bottom: 16px;\n}\n.odometer-arrive-block__title[data-v-5b96528d] {\n  font-size: 9px;\n  width: 190px;\n  height: 25px;\n}\n.odometer-arrive-block__value[data-v-5b96528d] {\n  display: flex;\n  font-size: 9px;\n}\n.odometer-arrive-block__value-devider[data-v-5b96528d] {\n  font-size: 9px;\n  width: 150px;\n  height: 22px;\n}\n.odometer-arrive-block__value-place[data-v-5b96528d] {\n  font-size: 9px;\n  flex-grow: 1;\n  height: 22px;\n  border: 2.5px solid black;\n}\n.mechanic-arrive-block[data-v-5b96528d] {\n  display: flex;\n  align-items: flex-end;\n  height: 28px;\n  margin-bottom: 3px;\n}\n.mechanic-arrive-block__label[data-v-5b96528d] {\n  font-size: 9px;\n  margin-right: 14px;\n  align-self: center;\n}\n.mechanic-arrive-block__signature-block[data-v-5b96528d] {\n  margin-right: 16px;\n}\n.mechanic-arrive-block__signature-value[data-v-5b96528d] {\n  width: 62px;\n  border-bottom: 1px solid black;\n}\n.mechanic-arrive-block__signature-label[data-v-5b96528d] {\n  font-size: 8px;\n  text-align: center;\n}\n.mechanic-arrive-block__name-block[data-v-5b96528d] {\n  flex-grow: 1;\n}\n.mechanic-arrive-block__name-value[data-v-5b96528d] {\n  font-size: 12px;\n  font-weight: 700;\n  text-align: center;\n  border-bottom: 1px solid black;\n}\n.mechanic-arrive-block__name-label[data-v-5b96528d] {\n  font-size: 8px;\n  text-align: center;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0__);
// Imports

var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_0___default()(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".relation[data-v-c7ea9f90] {\n  position: relative;\n  padding: 64px 32px;\n}\n.relation__title-car[data-v-c7ea9f90] {\n  font-weight: 700;\n  color: rgb(138, 0, 0);\n  font-size: 20px;\n  margin-bottom: 16px;\n}\n.relation__title-driver[data-v-c7ea9f90] {\n  font-weight: 700;\n  font-size: 22px;\n  text-align: center;\n  color: rgb(0, 76, 143);\n  margin-bottom: 16px;\n}\n.relation__car-number[data-v-c7ea9f90] {\n  text-transform: lowercase;\n  border: 1.5px solid black;\n  border-radius: 4px;\n  background-color: #fff;\n  padding: 0 4px;\n  color: black;\n}\n.relation-content[data-v-c7ea9f90] {\n  border: 1px solid lightgrey;\n  width: -moz-fit-content;\n  width: fit-content;\n  border-radius: 10px;\n  margin-bottom: 16px;\n}\n.relation-content span[data-v-c7ea9f90] {\n  font-weight: 700;\n  color: rgb(0, 76, 143);\n  margin-left: 4px;\n}\n.relation-form[data-v-c7ea9f90] {\n  border: 1px solid rgb(179, 179, 179);\n  width: 100%;\n  border-radius: 10px;\n  padding: 16px;\n  margin-bottom: 16px;\n}\n.relation-form label[data-v-c7ea9f90] {\n  font-size: 13px;\n  flex: 90px 0 0;\n  margin-right: 8px;\n}\n.relation-form input[data-v-c7ea9f90] {\n  height: 30px;\n  padding: 0 8px;\n  margin-right: 8px;\n  font-size: 15px;\n  text-align: center;\n  border-radius: 4px;\n  border: none;\n  color: rgb(0, 76, 143);\n}\n.relation-form a[data-v-c7ea9f90] {\n  color: green;\n}\n.relation-form__item[data-v-c7ea9f90] {\n  position: relative;\n  margin-bottom: 12px;\n  display: flex;\n  align-items: center;\n}\n.relation-form__mechanic[data-v-c7ea9f90] {\n  width: 350px;\n  letter-spacing: 1px;\n  cursor: default;\n}\n.relation-form__customer[data-v-c7ea9f90] {\n  width: 400px;\n  letter-spacing: 1px;\n}\n.relation-form__address[data-v-c7ea9f90] {\n  letter-spacing: 1px;\n  flex: 400px 0 1;\n}\n.relation-form__drop-list[data-v-c7ea9f90] {\n  background-color: #fff;\n  position: absolute;\n  z-index: 1;\n  width: 350px;\n  top: 32px;\n  right: 64px;\n  border: 1px solid black;\n  box-shadow: 1px 1px 2px 1px rgba(0, 0, 0, 0.4);\n  border-radius: 4px;\n  padding: 4px 0;\n}\n.relation-form__drop-item[data-v-c7ea9f90] {\n  text-align: start;\n  padding: 8px;\n  cursor: pointer;\n}\n.relation-form__drop-item[data-v-c7ea9f90]:hover {\n  background-color: rgb(217, 217, 217);\n}\n.background-print-document[data-v-c7ea9f90] {\n  background-color: rgb(214, 214, 214);\n  position: absolute;\n  z-index: 1;\n  left: 0;\n  top: 0;\n  right: 0;\n  height: -moz-fit-content;\n  height: fit-content;\n}\n.background-print-document__header[data-v-c7ea9f90] {\n  display: flex;\n  justify-content: center;\n  padding-top: 16px;\n  margin-bottom: 16px;\n}\n.background-print-document button[data-v-c7ea9f90]:not(:last-child) {\n  margin-right: 16px;\n}\n.close-btn[data-v-c7ea9f90] {\n  color: black;\n}\n.closeBtn[data-v-c7ea9f90] {\n  text-align: end;\n  padding-right: 8px;\n  cursor: pointer;\n}", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_style_index_0_id_fa816ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_style_index_0_id_fa816ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_style_index_0_id_fa816ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_style_index_0_id_dc491a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_style_index_0_id_dc491a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_style_index_0_id_dc491a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_style_index_0_id_5b96528d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_style_index_0_id_5b96528d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_style_index_0_id_5b96528d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_style_index_0_id_c7ea9f90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true& */ "./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true&");

            

var options = {};

options.insert = "head";
options.singleton = false;

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_style_index_0_id_c7ea9f90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"], options);



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_style_index_0_id_c7ea9f90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_1__["default"].locals || {});

/***/ }),

/***/ "./resources/js/components/DatePicker.vue":
/*!************************************************!*\
  !*** ./resources/js/components/DatePicker.vue ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _DatePicker_vue_vue_type_template_id_fa816ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=template&id=fa816ef2&scoped=true& */ "./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&scoped=true&");
/* harmony import */ var _DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=script&lang=js& */ "./resources/js/components/DatePicker.vue?vue&type=script&lang=js&");
/* harmony import */ var _DatePicker_vue_vue_type_style_index_0_id_fa816ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true& */ "./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _DatePicker_vue_vue_type_template_id_fa816ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _DatePicker_vue_vue_type_template_id_fa816ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "fa816ef2",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/DatePicker.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PrintBackSide.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/PrintBackSide.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrintBackSide_vue_vue_type_template_id_dc491a60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintBackSide.vue?vue&type=template&id=dc491a60&scoped=true& */ "./resources/js/components/PrintBackSide.vue?vue&type=template&id=dc491a60&scoped=true&");
/* harmony import */ var _PrintBackSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintBackSide.vue?vue&type=script&lang=js& */ "./resources/js/components/PrintBackSide.vue?vue&type=script&lang=js&");
/* harmony import */ var _PrintBackSide_vue_vue_type_style_index_0_id_dc491a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true& */ "./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PrintBackSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintBackSide_vue_vue_type_template_id_dc491a60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PrintBackSide_vue_vue_type_template_id_dc491a60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "dc491a60",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PrintBackSide.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/PrintDocument.vue":
/*!***************************************************!*\
  !*** ./resources/js/components/PrintDocument.vue ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _PrintDocument_vue_vue_type_template_id_5b96528d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PrintDocument.vue?vue&type=template&id=5b96528d&scoped=true& */ "./resources/js/components/PrintDocument.vue?vue&type=template&id=5b96528d&scoped=true&");
/* harmony import */ var _PrintDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./PrintDocument.vue?vue&type=script&lang=js& */ "./resources/js/components/PrintDocument.vue?vue&type=script&lang=js&");
/* harmony import */ var _PrintDocument_vue_vue_type_style_index_0_id_5b96528d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true& */ "./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _PrintDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _PrintDocument_vue_vue_type_template_id_5b96528d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _PrintDocument_vue_vue_type_template_id_5b96528d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "5b96528d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/components/PrintDocument.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/pages/relation/OneRelation.vue":
/*!*****************************************************!*\
  !*** ./resources/js/pages/relation/OneRelation.vue ***!
  \*****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _OneRelation_vue_vue_type_template_id_c7ea9f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./OneRelation.vue?vue&type=template&id=c7ea9f90&scoped=true& */ "./resources/js/pages/relation/OneRelation.vue?vue&type=template&id=c7ea9f90&scoped=true&");
/* harmony import */ var _OneRelation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./OneRelation.vue?vue&type=script&lang=js& */ "./resources/js/pages/relation/OneRelation.vue?vue&type=script&lang=js&");
/* harmony import */ var _OneRelation_vue_vue_type_style_index_0_id_c7ea9f90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true& */ "./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");



;


/* normalize component */

var component = (0,_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _OneRelation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _OneRelation_vue_vue_type_template_id_c7ea9f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render,
  _OneRelation_vue_vue_type_template_id_c7ea9f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns,
  false,
  null,
  "c7ea9f90",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/pages/relation/OneRelation.vue"
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (component.exports);

/***/ }),

/***/ "./resources/js/components/DatePicker.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/components/DatePicker.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PrintBackSide.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/PrintBackSide.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrintBackSide.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/PrintDocument.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/components/PrintDocument.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrintDocument.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/pages/relation/OneRelation.vue?vue&type=script&lang=js&":
/*!******************************************************************************!*\
  !*** ./resources/js/pages/relation/OneRelation.vue?vue&type=script&lang=js& ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OneRelation.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js??clonedRuleSet-5[0].rules[0].use[0]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=script&lang=js&");
 /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_babel_loader_lib_index_js_clonedRuleSet_5_0_rules_0_use_0_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true&":
/*!**********************************************************************************************************!*\
  !*** ./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true& ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_style_index_0_id_fa816ef2_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=style&index=0&id=fa816ef2&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_style_index_0_id_dc491a60_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=style&index=0&id=dc491a60&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true& ***!
  \*************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_style_index_0_id_5b96528d_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/style-loader/dist/cjs.js!../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=style&index=0&id=5b96528d&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true&":
/*!***************************************************************************************************************!*\
  !*** ./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true& ***!
  \***************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_dist_cjs_js_node_modules_css_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_2_node_modules_sass_loader_dist_cjs_js_clonedRuleSet_12_0_rules_0_use_3_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_style_index_0_id_c7ea9f90_lang_scss_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader/dist/cjs.js!../../../../node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!../../../../node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true& */ "./node_modules/style-loader/dist/cjs.js!./node_modules/css-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[1]!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[2]!./node_modules/sass-loader/dist/cjs.js??clonedRuleSet-12[0].rules[0].use[3]!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=style&index=0&id=c7ea9f90&lang=scss&scoped=true&");


/***/ }),

/***/ "./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&scoped=true&":
/*!*******************************************************************************************!*\
  !*** ./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&scoped=true& ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_fa816ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_fa816ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_DatePicker_vue_vue_type_template_id_fa816ef2_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./DatePicker.vue?vue&type=template&id=fa816ef2&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&scoped=true&");


/***/ }),

/***/ "./resources/js/components/PrintBackSide.vue?vue&type=template&id=dc491a60&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/PrintBackSide.vue?vue&type=template&id=dc491a60&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_template_id_dc491a60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_template_id_dc491a60_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintBackSide_vue_vue_type_template_id_dc491a60_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrintBackSide.vue?vue&type=template&id=dc491a60&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=template&id=dc491a60&scoped=true&");


/***/ }),

/***/ "./resources/js/components/PrintDocument.vue?vue&type=template&id=5b96528d&scoped=true&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/components/PrintDocument.vue?vue&type=template&id=5b96528d&scoped=true& ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_template_id_5b96528d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_template_id_5b96528d_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_PrintDocument_vue_vue_type_template_id_5b96528d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./PrintDocument.vue?vue&type=template&id=5b96528d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=template&id=5b96528d&scoped=true&");


/***/ }),

/***/ "./resources/js/pages/relation/OneRelation.vue?vue&type=template&id=c7ea9f90&scoped=true&":
/*!************************************************************************************************!*\
  !*** ./resources/js/pages/relation/OneRelation.vue?vue&type=template&id=c7ea9f90&scoped=true& ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_template_id_c7ea9f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.render),
/* harmony export */   "staticRenderFns": () => (/* reexport safe */ _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_template_id_c7ea9f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__.staticRenderFns)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_OneRelation_vue_vue_type_template_id_c7ea9f90_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib/index.js??vue-loader-options!./OneRelation.vue?vue&type=template&id=c7ea9f90&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=template&id=c7ea9f90&scoped=true&");


/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&scoped=true&":
/*!**********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/DatePicker.vue?vue&type=template&id=fa816ef2&scoped=true& ***!
  \**********************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "date-picker" }, [
    _c("div", { staticClass: "date-picker__item date-picker__day" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.day,
            expression: "day",
          },
        ],
        attrs: { type: "text", placeholder: "День" },
        domProps: { value: _vm.day },
        on: {
          click: _vm.toggleDayList,
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.day = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _vm.isDayListOpen
        ? _c(
            "ul",
            { staticClass: "date-picker__drop-day" },
            _vm._l(31, function (n) {
              return _c(
                "li",
                {
                  key: n,
                  on: {
                    click: function ($event) {
                      return _vm.selectDay(n)
                    },
                  },
                },
                [_vm._v(_vm._s(n))]
              )
            }),
            0
          )
        : _vm._e(),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "date-picker__item date-picker__month" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.month,
            expression: "month",
          },
        ],
        attrs: { type: "text", placeholder: "Месяц" },
        domProps: { value: _vm.month },
        on: {
          click: _vm.toggleMonthList,
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.month = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _vm.isMonthListOpen
        ? _c(
            "ul",
            { staticClass: "date-picker__drop-month" },
            _vm._l(_vm.monthList, function (month) {
              return _c(
                "li",
                {
                  key: month,
                  on: {
                    click: function ($event) {
                      return _vm.selectMonth(month)
                    },
                  },
                },
                [_vm._v(_vm._s(month))]
              )
            }),
            0
          )
        : _vm._e(),
    ]),
    _vm._v(" "),
    _c("div", { staticClass: "date-picker__item date-picker__year" }, [
      _c("input", {
        directives: [
          {
            name: "model",
            rawName: "v-model",
            value: _vm.year,
            expression: "year",
          },
        ],
        attrs: { type: "text", placeholder: "Год" },
        domProps: { value: _vm.year },
        on: {
          click: _vm.toggleYearList,
          input: function ($event) {
            if ($event.target.composing) {
              return
            }
            _vm.year = $event.target.value
          },
        },
      }),
      _vm._v(" "),
      _vm.isYearListOpen
        ? _c(
            "ul",
            { staticClass: "date-picker__drop-year" },
            _vm._l(_vm.yearList, function (year) {
              return _c(
                "li",
                {
                  key: year,
                  on: {
                    click: function ($event) {
                      return _vm.selectYear(year)
                    },
                  },
                },
                [_vm._v(_vm._s(year))]
              )
            }),
            0
          )
        : _vm._e(),
    ]),
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=template&id=dc491a60&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintBackSide.vue?vue&type=template&id=dc491a60&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "back-side-list-of-paper print-back" }, [
    _c("div", { staticClass: "horizontal-devider" }),
    _vm._v(" "),
    _c("div", { staticClass: "document-back-side" }, [
      _c("div", { staticClass: "back-side-top-devider" }),
      _vm._v(" "),
      _c("div", { staticClass: "back-side-top-label" }, [
        _vm._v("Оборотная сторона"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "table" }, [
        _c(
          "div",
          { staticClass: "table-number" },
          [
            _c("div", { staticClass: "table-number__header" }, [
              _vm._v("Номер по порядку"),
            ]),
            _vm._v(" "),
            _vm._l(_vm.linesCount, function (n) {
              return _c("div", { key: n, staticClass: "table-number__value" }, [
                _vm._v(_vm._s(n) + "."),
              ])
            }),
          ],
          2
        ),
        _vm._v(" "),
        _c("div", { staticClass: "table-place" }, [
          _c("div", { staticClass: "table-place__header" }, [_vm._v("Место")]),
          _vm._v(" "),
          _c("div", { staticClass: "table-place__columns" }, [
            _c(
              "div",
              { staticClass: "table-place__departure" },
              [
                _c("div", { staticClass: "table-place__departure-header" }, [
                  _vm._v("отправления"),
                ]),
                _vm._v(" "),
                _vm._l(_vm.linesCount, function (n) {
                  return _c("div", {
                    key: n,
                    staticClass: "table-place__departure-value",
                  })
                }),
              ],
              2
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "table-place__arrive" },
              [
                _c("div", { staticClass: "table-place__arrive-header" }, [
                  _vm._v("назначения"),
                ]),
                _vm._v(" "),
                _vm._l(_vm.linesCount, function (n) {
                  return _c("div", {
                    key: n,
                    staticClass: "table-place__arrive-value",
                  })
                }),
              ],
              2
            ),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "table-time" }, [
          _c("div", { staticClass: "table-time__header" }, [_vm._v("Время")]),
          _vm._v(" "),
          _c("div", { staticClass: "table-time__columns" }, [
            _c("div", { staticClass: "table-time__departure" }, [
              _c("div", { staticClass: "table-time__departure-header" }, [
                _vm._v("выезда"),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-time__departure-columns" }, [
                _c(
                  "div",
                  { staticClass: "table-time__departure-hours" },
                  [
                    _c(
                      "div",
                      { staticClass: "table-time__departure-hours-header" },
                      [_vm._v("ч")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.linesCount, function (n) {
                      return _c("div", {
                        key: n,
                        staticClass: "table-time__departure-hours-value",
                      })
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "table-time__departure-minutes" },
                  [
                    _c(
                      "div",
                      { staticClass: "table-time__departure-minutes-header" },
                      [_vm._v("мин")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.linesCount, function (n) {
                      return _c("div", {
                        key: n,
                        staticClass: "table-time__departure-minutes-value",
                      })
                    }),
                  ],
                  2
                ),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "table-time__arrive" }, [
              _c("div", { staticClass: "table-time__arrive-header" }, [
                _vm._v("возвращения"),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "table-time__arrive-columns" }, [
                _c(
                  "div",
                  { staticClass: "table-time__arrive-hours" },
                  [
                    _c(
                      "div",
                      { staticClass: "table-time__arrive-hours-header" },
                      [_vm._v("ч")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.linesCount, function (n) {
                      return _c("div", {
                        key: n,
                        staticClass: "table-time__arrive-hours-value",
                      })
                    }),
                  ],
                  2
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "table-time__arrive-minutes" },
                  [
                    _c(
                      "div",
                      { staticClass: "table-time__arrive-minutes-header" },
                      [_vm._v("мин")]
                    ),
                    _vm._v(" "),
                    _vm._l(_vm.linesCount, function (n) {
                      return _c("div", {
                        key: n,
                        staticClass: "table-time__arrive-minutes-value",
                      })
                    }),
                  ],
                  2
                ),
              ]),
            ]),
          ]),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "table-distance" },
          [
            _vm._m(0),
            _vm._v(" "),
            _vm._l(_vm.linesCount, function (n) {
              return _c("div", { key: n, staticClass: "table-distance__value" })
            }),
          ],
          2
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "table-signature" },
          [
            _vm._m(1),
            _vm._v(" "),
            _vm._l(_vm.linesCount, function (n) {
              return _c("div", {
                key: n,
                staticClass: "table-signature__value",
              })
            }),
          ],
          2
        ),
      ]),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-distance__header" }, [
      _vm._v("Пройдено,"),
      _c("br"),
      _vm._v(" км"),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "table-signature__header" }, [
      _vm._v("\n                    Подпись"),
      _c("br"),
      _vm._v("\n                    лица, пользо-"),
      _c("br"),
      _vm._v("\n                    вавшегося"),
      _c("br"),
      _vm._v("\n                    автомо-"),
      _c("br"),
      _vm._v("\n                    билем\n                "),
    ])
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=template&id=5b96528d&scoped=true&":
/*!*************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/components/PrintDocument.vue?vue&type=template&id=5b96528d&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "modal" }, [
    _c("div", { staticClass: "list-of-paper print" }, [
      _c("header", { staticClass: "print-header" }),
      _vm._v(" "),
      _c("div", { staticClass: "document" }, [
        _c("div", { staticClass: "big-top-block" }, [
          _vm._m(0),
          _vm._v(" "),
          _c("div", { staticClass: "title-block" }, [
            _c("h1", [_vm._v("ПУТЕВОЙ ЛИСТ АВТОМОБИЛЯ")]),
            _vm._v(" "),
            _c("div", { staticClass: "title-block__series" }),
            _vm._v(" "),
            _vm._m(1),
            _vm._v(" "),
            _c("div", { staticClass: "title-block__number" }, [
              _c("b", [_vm._v(_vm._s(_vm.waybillNumber))]),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "date-block" }, [
            _c("p", [_vm._v('"')]),
            _vm._v(" "),
            _c("div", { staticClass: "date-block__day" }, [
              _vm._v(_vm._s(_vm.date.day)),
            ]),
            _vm._v(" "),
            _c("p", [_vm._v('"')]),
            _vm._v(" "),
            _c("div", { staticClass: "date-block__month" }, [
              _vm._v(_vm._s(_vm.date.month)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "date-block__year" }, [
              _vm._v(_vm._s(_vm.date.year)),
            ]),
            _vm._v(" "),
            _c("p", [_vm._v("г.")]),
            _vm._v(" "),
            _c("div", { staticClass: "date-block__series-label" }, [
              _vm._v("серия"),
            ]),
          ]),
          _vm._v(" "),
          _vm._m(2),
          _vm._v(" "),
          _c("div", { staticClass: "company-labels-block" }, [
            _vm._v(
              "\n                    наименование, адрес, номер телефона\n                "
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "model-block" }, [
            _c("div", { staticClass: "model-block__label" }, [
              _vm._v("Марка автомобиля"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "model-block__type" }, [
              _vm._v("Легковой"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "model-block__model" }, [
              _vm._v(_vm._s(_vm.model)),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "car-number-block" }, [
            _c("div", { staticClass: "car-number-block__label" }, [
              _vm._v("Государственный номерной знак"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "car-number-block__number" }, [
              _vm._v(_vm._s(_vm.number)),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "driver-block" }, [
            _c("div", { staticClass: "driver-block__label" }, [
              _vm._v("Водитель"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "driver-block__name" }, [
              _vm._v(
                _vm._s(_vm.last_name) +
                  " " +
                  _vm._s(_vm.first_name) +
                  " " +
                  _vm._s(_vm.middle_name)
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "driver-block__label-2" }, [
              _vm._v("Табельный номер"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "driver-block__person-number" }, [
              _vm._v(_vm._s(_vm.person_number)),
            ]),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "driver-labels-block" }, [
            _vm._v(
              "\n                    фамилия имя отчество\n                "
            ),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "license-block" }, [
            _c("div", { staticClass: "license-block__label" }, [
              _vm._v("Удостоверение №"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "license-block__number" }, [
              _vm._v(_vm._s(_vm.driver_license)),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "license-block__label-2" }, [
              _vm._v("Класс"),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "license-block__class" }),
          ]),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "big-bottom-block" }, [
          _c("div", { staticClass: "big-bottom-block__left" }, [
            _vm._m(3),
            _vm._v(" "),
            _c("div", { staticClass: "task-header-block" }, [
              _vm._v(
                "\n                        Задание водителю\n                    "
              ),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "customer-block" }, [
              _c("div", { staticClass: "customer-block__label" }, [
                _vm._v("В распоряжение"),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "customer-block__right" }, [
                _c("div", { staticClass: "customer-block__value" }, [
                  _vm._v(_vm._s(_vm.customer)),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "customer-block__value-label" }, [
                  _vm._v("наименование"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(4),
            _vm._v(" "),
            _c("div", { staticClass: "customer-address-block" }, [
              _vm._m(5),
              _vm._v(" "),
              _c("div", { staticClass: "customer-address-block__value-2" }, [
                _vm._v(_vm._s(_vm.address)),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "customer-address-block__value-3" }),
            ]),
            _vm._v(" "),
            _vm._m(6),
            _vm._v(" "),
            _c("div", { staticClass: "dispetcher-block" }, [
              _c("div", { staticClass: "dispetcher-block__label" }, [
                _vm._v("Диспетчер-нарядчик"),
              ]),
              _vm._v(" "),
              _vm._m(7),
              _vm._v(" "),
              _c("div", { staticClass: "dispetcher-block__name-block" }, [
                _c("div", { staticClass: "dispetcher-block__name-value" }, [
                  _vm._v(_vm._s(_vm.dispetcherName)),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dispetcher-block__name-label" }, [
                  _vm._v("расшифровка подписи"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _vm._m(8),
            _vm._v(" "),
            _c("div", { staticClass: "dispetcher-block" }, [
              _c("div", { staticClass: "dispetcher-block__label" }, [
                _vm._v("Диспетчер-нарядчик"),
              ]),
              _vm._v(" "),
              _vm._m(9),
              _vm._v(" "),
              _c("div", { staticClass: "dispetcher-block__name-block" }, [
                _c("div", { staticClass: "dispetcher-block__name-value" }, [
                  _vm._v(_vm._s(_vm.dispetcherName)),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "dispetcher-block__name-label" }, [
                  _vm._v("расшифровка подписи"),
                ]),
              ]),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "divider-block" }),
            _vm._v(" "),
            _vm._m(10),
            _vm._v(" "),
            _vm._m(11),
            _vm._v(" "),
            _vm._m(12),
            _vm._v(" "),
            _vm._m(13),
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "big-bottom-block__right" }, [
            _c("div", { staticClass: "mechanic-check-title" }, [
              _vm._v(
                "\n                        Автомобиль технически исправен\n                    "
              ),
            ]),
            _vm._v(" "),
            _vm._m(14),
            _vm._v(" "),
            _c("div", { staticClass: "mechanic-departure-block" }, [
              _c("p", [_vm._v("контроль технического состояния пройден")]),
              _vm._v(" "),
              _c("h3", [_vm._v("выпуск на линию разрешен")]),
              _vm._v(" "),
              _vm._m(15),
              _vm._v(" "),
              _c(
                "div",
                { staticClass: "mechanic-departure-block__signature" },
                [_vm._v(_vm._s(_vm.mechanicName))]
              ),
              _vm._v(" "),
              _vm._m(16),
            ]),
            _vm._v(" "),
            _vm._m(17),
            _vm._v(" "),
            _vm._m(18),
            _vm._v(" "),
            _c("div", { staticClass: "fuel-type-block" }, [
              _c("div", { staticClass: "fuel-type-block__label" }, [
                _vm._v(
                  "\n                            Горючее\n                        "
                ),
              ]),
              _vm._v(" "),
              _c("div", { staticClass: "fuel-type-block__type" }, [
                _c("div", { staticClass: "fuel-type-block__type-title" }, [
                  _vm._v("марка"),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "fuel-type-block__type-value" }, [
                  _vm._v(_vm._s(_vm.fuel)),
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "fuel-type-block__type-value" }),
              ]),
              _vm._v(" "),
              _vm._m(19),
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "fuel-check-title" }, [
              _vm._v(
                "\n                        Движение горючего\n                    "
              ),
            ]),
            _vm._v(" "),
            _vm._m(20),
            _vm._v(" "),
            _vm._m(21),
            _vm._v(" "),
            _c("div", { staticClass: "mechanic-arrive-block" }, [
              _c("div", { staticClass: "mechanic-arrive-block__label" }, [
                _vm._v("Механик"),
              ]),
              _vm._v(" "),
              _vm._m(22),
              _vm._v(" "),
              _c("div", { staticClass: "mechanic-arrive-block__name-block" }, [
                _c(
                  "div",
                  { staticClass: "mechanic-arrive-block__name-value" },
                  [_vm._v(_vm._s(_vm.mechanicName))]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "mechanic-arrive-block__name-label" },
                  [_vm._v("расшифровка подписи")]
                ),
              ]),
            ]),
          ]),
        ]),
      ]),
      _vm._v(" "),
      _c("footer", { staticClass: "print-footer" }),
    ]),
  ])
}
var staticRenderFns = [
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "stamp-block" }, [
      _c("p", [
        _vm._v("Место для штампа"),
        _c("br"),
        _vm._v("\n                    организации"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("p", [_c("b", [_vm._v("N")])])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "company-block" }, [
      _c("div", { staticClass: "company-block__label" }, [
        _vm._v("\n                        Организация\n                    "),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "company-block__info" }, [
        _c("p", [
          _vm._v(
            'ООО "Авиакомпания Волга-Днепр", ИНН7328510118, ОГРН 1077328004841, 432067,'
          ),
          _c("br"),
          _vm._v(
            "\n                        г.Ульяновск, ул. Карбышева, 14, тел.(8422)590127"
          ),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "license-card-block" }, [
      _c("div", { staticClass: "license-card-block__label" }, [
        _vm._v("Лицензионная карточка"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "license-card-block__right" }, [
        _c("div", { staticClass: "license-card-block__value" }, [
          _vm._v("стандартная, ограниченная"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "license-card-block__value-label" }, [
          _vm._v("ненужное зачеркнуть"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "organization-block" }, [
      _c("div", { staticClass: "organization-block__value" }, [
        _vm._v('ООО "Авиакомпания Волга-Днепр"'),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "organization-block__value-label" }, [
        _vm._v("организация"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "customer-address-block__label-block" }, [
      _c("div", { staticClass: "customer-address-block__label" }, [
        _vm._v("Адрес подачи"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "customer-address-block__value" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "departure-time-block" }, [
      _c("div", { staticClass: "departure-time-block__label" }, [
        _vm._v("Время выезда из гаража, ч, мин."),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "departure-time-block__value" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dispetcher-block__signature-block" }, [
      _c("div", { staticClass: "dispetcher-block__signature-value" }),
      _vm._v(" "),
      _c("div", { staticClass: "dispetcher-block__signature-label" }, [
        _vm._v("подпись"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "arrive-time-block" }, [
      _c("div", { staticClass: "arrive-time-block__label" }, [
        _vm._v("Время выозвращения в гараж, ч, мин."),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "arrive-time-block__value" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "dispetcher-block__signature-block" }, [
      _c("div", { staticClass: "dispetcher-block__signature-value" }),
      _vm._v(" "),
      _c("div", { staticClass: "dispetcher-block__signature-label" }, [
        _vm._v("подпись"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "comments-block" }, [
      _c("div", { staticClass: "comments-block__label" }, [
        _vm._v(
          "\n                            Опоздания, ожидания, простои в пути, заезды в гараж и прочее\n                        "
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "comments-block__value" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "logistic-block" }, [
      _c("div", { staticClass: "logistic-block__routes" }, [
        _vm._v(
          "\n                            Вид сообщений: город, пригород, межгород\n                        "
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "logistic-block__payload" }, [
        _vm._v(
          "\n                            Вид перевозок:\n                        "
        ),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "finish-drive-block" }, [
      _c("div", { staticClass: "finish-drive-block__label" }, [
        _vm._v("Автомобиль сдал водитель"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "finish-drive-block__value-1" }),
      _vm._v(" "),
      _c("div", { staticClass: "finish-drive-block__value-2" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "bottom-labels-block" }, [
      _c("div", { staticClass: "bottom-labels-block__stamp-place" }, [
        _vm._v("М.П."),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bottom-labels-block__label-1" }, [
        _vm._v("подпись"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "bottom-labels-block__label-2" }, [
        _vm._v("расшифровка подписи"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "odometer-departure-block" }, [
      _c("div", { staticClass: "odometer-departure-block__label" }, [
        _vm._v(
          "\n                            Показание спидометра, км\n                        "
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "odometer-departure-block__value" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mechanic-departure-block__date" }, [
      _c("p", [_vm._v("«")]),
      _vm._v(" "),
      _c("div", { staticClass: "mechanic-departure-block__day" }),
      _vm._v(" "),
      _c("p", [_vm._v("»")]),
      _vm._v(" "),
      _c("div", { staticClass: "mechanic-departure-block__month" }),
      _vm._v(" "),
      _c("p", [_vm._v("202")]),
      _vm._v(" "),
      _c("div", { staticClass: "mechanic-departure-block__year" }),
      _vm._v(" "),
      _c("p", [_vm._v("г.")]),
      _vm._v(" "),
      _c("div", { staticClass: "mechanic-departure-block__hours" }),
      _vm._v(" "),
      _c("p", [_vm._v("ч.")]),
      _vm._v(" "),
      _c("div", { staticClass: "mechanic-departure-block__minutes" }),
      _vm._v(" "),
      _c("p", [_vm._v("мин")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "mechanic-departure-block__labels" }, [
      _c("div", { staticClass: "mechanic-departure-block__label-1" }, [
        _vm._v("подпись"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "mechanic-departure-block__label-2" }, [
        _vm._v("расшифровка подписи"),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "driver-check-title" }, [
      _c("p", [_vm._v("Автомобиль в технически исправном состоянии принял")]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "driver-check-block" }, [
      _c("div", { staticClass: "driver-check-block__label" }, [
        _vm._v("Водитель"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "driver-check-block__signature-block" }, [
        _c("div", { staticClass: "driver-check-block__signature-value" }),
        _vm._v(" "),
        _c("div", { staticClass: "driver-check-block__signature-label" }, [
          _vm._v("подпись"),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "driver-check-block__name-block" }, [
        _c("div", { staticClass: "driver-check-block__name-value" }),
        _vm._v(" "),
        _c("div", { staticClass: "driver-check-block__name-label" }, [
          _vm._v("расшифровка подписи"),
        ]),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fuel-type-block__code" }, [
      _c("div", { staticClass: "fuel-type-block__code-title" }, [
        _vm._v("код"),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "fuel-type-block__code-value" }),
      _vm._v(" "),
      _c("div", { staticClass: "fuel-type-block__code-value" }),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "fuel-check-section" }, [
      _c("div", { staticClass: "fuel-check-section__left" }, [
        _c("div", { staticClass: "fuel-check-section__left-title" }),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__left-recieved" }, [
          _c("div", [_vm._v("Выдано:")]),
          _vm._v(" "),
          _c("div", [_vm._v("по заправочному")]),
          _vm._v(" "),
          _c("p", { staticClass: "fuel-check-section__left-doc-number" }, [
            _vm._v("листу №"),
          ]),
          _vm._v(" "),
          _c("p", { staticClass: "fuel-check-section__left-devider" }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__left-rest-before" }, [
          _vm._v("Остаток: при везде"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__left-rest-after" }, [
          _vm._v("при возвращении"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__left-spent-norm" }, [
          _vm._v("Расход: по норме"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__left-spent-fact" }, [
          _vm._v("фактически"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__left-economy" }, [
          _vm._v("Экономия"),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__left-spent-over" }, [
          _vm._v("Перерасход"),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "fuel-check-section__right" }, [
        _c("div", { staticClass: "fuel-check-section__right-title" }, [
          _vm._v(
            "\n                                Количество, л\n                            "
          ),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__right-recieved" }),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__right-rest-before" }),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__right-rest-after" }),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__right-spent-norm" }),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__right-spent-fact" }),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__right-economy" }),
        _vm._v(" "),
        _c("div", { staticClass: "fuel-check-section__right-spent-over" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "odometer-arrive-block" }, [
      _c("div", { staticClass: "odometer-arrive-block__title" }, [
        _vm._v(
          "\n                            Автомобиль принял. Показание спидометра при возвращении в гараж, км\n                        "
        ),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "odometer-arrive-block__value" }, [
        _c("div", { staticClass: "odometer-arrive-block__value-devider" }),
        _vm._v(" "),
        _c("div", { staticClass: "odometer-arrive-block__value-place" }),
      ]),
    ])
  },
  function () {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "mechanic-arrive-block__signature-block" },
      [
        _c("div", { staticClass: "mechanic-arrive-block__signature-value" }),
        _vm._v(" "),
        _c("div", { staticClass: "mechanic-arrive-block__signature-label" }, [
          _vm._v("подпись"),
        ]),
      ]
    )
  },
]
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=template&id=c7ea9f90&scoped=true&":
/*!***************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib/index.js??vue-loader-options!./resources/js/pages/relation/OneRelation.vue?vue&type=template&id=c7ea9f90&scoped=true& ***!
  \***************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "render": () => (/* binding */ render),
/* harmony export */   "staticRenderFns": () => (/* binding */ staticRenderFns)
/* harmony export */ });
var render = function () {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "relation" },
    [
      _vm.isPrintOpen
        ? _c(
            "div",
            { staticClass: "background-print-document" },
            [
              _c("div", { staticClass: "background-print-document__header" }, [
                _c(
                  "button",
                  {
                    staticClass: "app-btn close-btn",
                    on: { click: _vm.togglePrintDocument },
                  },
                  [_vm._v("Закрыть")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "app-btn app-btn__print close-btn",
                    on: { click: _vm.printDocument },
                  },
                  [_vm._v("Печать")]
                ),
              ]),
              _vm._v(" "),
              _c("print-document", {
                attrs: {
                  model: _vm.car.model,
                  number: _vm.car.number,
                  fuel: _vm.car.fuel,
                  last_name: _vm.driver.last_name,
                  first_name: _vm.driver.first_name,
                  middle_name: _vm.driver.middle_name,
                  person_number: _vm.driver.person_number,
                  driver_license: _vm.driver.driver_license,
                  mechanic: _vm.selectedMechanic,
                  dispetcher: _vm.selectedDispetcher,
                  waybillNumber: _vm.waybillNumber,
                  date: _vm.formatDate(_vm.dateFrom, _vm.dateTo),
                  customer: _vm.customer,
                  address: _vm.address,
                },
              }),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _vm.isPrintBackOpen
        ? _c(
            "div",
            { staticClass: "background-print-document" },
            [
              _c("div", { staticClass: "background-print-document__header" }, [
                _c(
                  "button",
                  {
                    staticClass: "app-btn close-btn",
                    on: { click: _vm.printBackSide },
                  },
                  [_vm._v("Печать")]
                ),
                _vm._v(" "),
                _c(
                  "button",
                  {
                    staticClass: "app-btn close-btn",
                    on: { click: _vm.togglePrintBack },
                  },
                  [_vm._v("Закрыть")]
                ),
              ]),
              _vm._v(" "),
              _c("print-back-side"),
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "relation__title-car" }, [
        _vm._v("\n        " + _vm._s(_vm.car.model) + " - "),
        _c("span", { staticClass: "relation__car-number" }, [
          _vm._v(_vm._s(_vm.car.number)),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "relation__title-driver" }, [
        _vm._v(
          "\n        " +
            _vm._s(_vm.driver.last_name) +
            " " +
            _vm._s(_vm.driver.first_name) +
            " " +
            _vm._s(_vm.driver.middle_name) +
            "                \n    "
        ),
      ]),
      _vm._v(" "),
      _vm.loading ? _c("app-loader") : _vm._e(),
      _vm._v(" "),
      _vm.errored ? _c("error-notification") : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "relation-content" }, [
        _c("div", [
          _vm._v("вод. удостоверение: "),
          _c("span", [_vm._v(_vm._s(_vm.driver.driver_license))]),
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v("табельный номер: "),
          _c("span", [_vm._v(_vm._s(_vm.driver.person_number))]),
        ]),
        _vm._v(" "),
        _c("div", [
          _vm._v("Марка топлива: "),
          _c("span", [_vm._v(_vm._s(_vm.car.fuel))]),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "relation-form" }, [
        _c("div", { staticClass: "relation-form__item waybill" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("№ п. листа: ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.waybillNumber,
                expression: "waybillNumber",
              },
            ],
            attrs: { type: "text" },
            domProps: { value: _vm.waybillNumber },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.waybillNumber = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "relation-form__item" },
          [
            _c("label", { attrs: { for: "" } }, [_vm._v("Дата выезда: ")]),
            _vm._v(" "),
            _c("date-picker", {
              on: {
                updateDay: _vm.updateDayFrom,
                updateMonth: _vm.updateMonthFrom,
                updateYear: _vm.updateYearFrom,
              },
            }),
          ],
          1
        ),
        _vm._v(" "),
        _c(
          "div",
          { staticClass: "relation-form__item" },
          [
            _c("label", { attrs: { for: "" } }, [_vm._v("Дата заезда: ")]),
            _vm._v(" "),
            !_vm.isSameDate
              ? _c("date-picker", {
                  on: {
                    updateDay: _vm.updateDayTo,
                    updateMonth: _vm.updateMonthTo,
                    updateYear: _vm.updateYearTo,
                  },
                })
              : _vm._e(),
            _vm._v(" "),
            !_vm.isSameDate
              ? _c(
                  "a",
                  { attrs: { href: "#" }, on: { click: _vm.makeSameDate } },
                  [_vm._v("Заезд в тот же день")]
                )
              : _vm._e(),
            _vm._v(" "),
            _vm.isSameDate
              ? _c(
                  "a",
                  { attrs: { href: "#" }, on: { click: _vm.makeDiffDate } },
                  [_vm._v("Добавить дату заезда")]
                )
              : _vm._e(),
          ],
          1
        ),
        _vm._v(" "),
        _c("div", { staticClass: "relation-form__item mechanic" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("заказчик: ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.customer,
                expression: "customer",
              },
            ],
            staticClass: "relation-form__customer",
            attrs: { type: "text" },
            domProps: { value: _vm.customer },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.customer = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "relation-form__item mechanic" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("адрес подачи: ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.address,
                expression: "address",
              },
            ],
            staticClass: "relation-form__address",
            attrs: { type: "text" },
            domProps: { value: _vm.address },
            on: {
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.address = $event.target.value
              },
            },
          }),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "relation-form__item mechanic" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("механик: ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.mechanicFullName,
                expression: "mechanicFullName",
              },
            ],
            staticClass: "relation-form__mechanic",
            attrs: { type: "text", readonly: "" },
            domProps: { value: _vm.mechanicFullName },
            on: {
              click: _vm.toggleMechanicList,
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.mechanicFullName = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _vm.isMechanicListOpen
            ? _c(
                "ul",
                { staticClass: "relation-form__drop-list" },
                [
                  _c(
                    "li",
                    {
                      staticClass: "closeBtn",
                      on: { click: _vm.toggleMechanicList },
                    },
                    [_vm._v("x")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.mechanicList, function (mechanic) {
                    return _c(
                      "li",
                      {
                        key: mechanic.id,
                        staticClass: "relation-form__drop-item",
                        on: {
                          click: function ($event) {
                            return _vm.selectMechanic(mechanic)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(mechanic.last_name) +
                            " " +
                            _vm._s(mechanic.first_name) +
                            " " +
                            _vm._s(mechanic.middle_name) +
                            "\n                "
                        ),
                      ]
                    )
                  }),
                ],
                2
              )
            : _vm._e(),
        ]),
        _vm._v(" "),
        _c("div", { staticClass: "relation-form__item dispetcher" }, [
          _c("label", { attrs: { for: "" } }, [_vm._v("диспетчер: ")]),
          _vm._v(" "),
          _c("input", {
            directives: [
              {
                name: "model",
                rawName: "v-model",
                value: _vm.dispetcherFullName,
                expression: "dispetcherFullName",
              },
            ],
            staticClass: "relation-form__mechanic",
            attrs: { type: "text", readonly: "" },
            domProps: { value: _vm.dispetcherFullName },
            on: {
              click: _vm.toggleDispetcherList,
              input: function ($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.dispetcherFullName = $event.target.value
              },
            },
          }),
          _vm._v(" "),
          _vm.isDispetcherListOpen
            ? _c(
                "ul",
                { staticClass: "relation-form__drop-list" },
                [
                  _c(
                    "li",
                    {
                      staticClass: "closeBtn",
                      on: { click: _vm.toggleDispetcherList },
                    },
                    [_vm._v("x")]
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.dispetcherList, function (dispetcher) {
                    return _c(
                      "li",
                      {
                        key: dispetcher.id,
                        staticClass: "relation-form__drop-item",
                        on: {
                          click: function ($event) {
                            return _vm.selectDispetcher(dispetcher)
                          },
                        },
                      },
                      [
                        _vm._v(
                          "\n                    " +
                            _vm._s(dispetcher.last_name) +
                            " " +
                            _vm._s(dispetcher.first_name) +
                            " " +
                            _vm._s(dispetcher.middle_name) +
                            "\n                "
                        ),
                      ]
                    )
                  }),
                ],
                2
              )
            : _vm._e(),
        ]),
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "app-btn-group" }, [
        _c(
          "button",
          {
            staticClass: "app-btn app-btn__back mr-16",
            on: {
              click: function ($event) {
                $event.preventDefault()
                return _vm.goBack.apply(null, arguments)
              },
            },
          },
          [_vm._v("\n            Назад\n        ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "app-btn app-btn__print",
            on: { click: _vm.togglePrintDocument },
          },
          [_vm._v("\n            Распечатать\n        ")]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "app-btn app-btn__print",
            on: { click: _vm.togglePrintBack },
          },
          [_vm._v("\n            Обр. сторона\n        ")]
        ),
      ]),
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ })

}]);
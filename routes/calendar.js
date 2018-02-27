
exports.view = function(req, res){
  res.render('index', {});
};

// $(function () {

//   $('#calendar').calendar({
//     ifSwitch: true, // whether to switch the month
//     hoverDate: true, // whether the hover will show the info of today
//     backToday: true // whether to go back to today 
//   });

// });

// ;(function ($, window, document, undefined) {

//   var Calendar = function (elem, options) {
//     this.$calendar = elem;

//     this.defaults = {
//       ifSwitch: true,
//       hoverDate: false,
//       backToday: false
//     };

//     this.opts = $.extend({}, this.defaults, options);

//     // console.log(this.opts);
//   };

//   Calendar.prototype = {
//     showHoverInfo: function (obj) { // hover today info
//       var _dateStr = $(obj).attr('data');
//       var offset_t = $(obj).offset().top + (this.$calendar_today.height() - $(obj).height()) / 2;
//       var offset_l = $(obj).offset().left + $(obj).width();
//       var changeStr = _dateStr.substr(0, 4) + '-' + _dateStr.substr(4, 2) + '-' + _dateStr.substring(6);
//       var _week = changingStr(changeStr).getDay();
//       var _weekStr = '';

//       this.$calendar_today.show();

//       this.$calendar_today
//             .css({left: offset_l + 30, top: offset_t})
//             .stop()
//             .animate({left: offset_l + 16, top: offset_t, opacity: 1});

//       switch(_week) {
//         case 0:
//           _weekStr = 'Sunday';
//         break;
//         case 1:
//           _weekStr = 'Monday';
//         break;
//         case 2:
//           _weekStr = 'Tuesday';
//         break;
//         case 3:
//           _weekStr = 'Wednesday';
//         break;
//         case 4:
//           _weekStr = 'Thursday';
//         break;
//         case 5:
//           _weekStr = 'Friday';
//         break;
//         case 6:
//           _weekStr = 'Saturday';
//         break;
//       }

//       this.$calendarToday_date.text(changeStr);
//       this.$calendarToday_week.text(_weekStr);
//     },

//     showCalendar: function () { // Inserte data and show
//       var self = this;
//       var year = dateObj.getDate().getFullYear();
//       var month = dateObj.getDate().getMonth() + 1;
//       var dateStr = returnDateStr(dateObj.getDate());
//       var firstDay = new Date(year, month - 1, 1); // First day of the month

//       this.$calendarTitle_text.text(year + '/' + dateStr.substr(4, 2));

//       this.$calendarDate_item.each(function (i) {
//         // allDay
//         var allDay = new Date(year, month - 1, i + 1 - firstDay.getDay());
//         var allDay_str = returnDateStr(allDay);

//         $(this).text(allDay.getDate()).attr('data', allDay_str);

//         if (returnDateStr(new Date()) === allDay_str) {
//           $(this).attr('class', 'item item-curDay');
//         } else if (returnDateStr(firstDay).substr(0, 6) === allDay_str.substr(0, 6)) {
//           $(this).attr('class', 'item item-curMonth');
//         } else {
//           $(this).attr('class', 'item');
//         }
//       });
//     },

//     renderDOM: function () { 
//       this.$calendar_title = $('<div class="calendar-title"></div>');
//       this.$calendar_week = $('<ul class="calendar-week"></ul>');
//       this.$calendar_date = $('<ul class="calendar-date"></ul>');
//       this.$calendar_today = $('<div class="calendar-today"></div>');


//       var _titleStr = '<a href="#" class="title"></a>'+
//                       '<a href="javascript:;" id="backToday">T</a>'+
//                       '<div class="arrow">'+
//                         '<span class="arrow-prev"><</span>'+
//                         '<span class="arrow-next">></span>'+
//                       '</div>';
//       var _weekStr = '<li class="item">Sun.</li>'+
//                       '<li class="item">Mon.</li>'+
//                       '<li class="item">Tue.</li>'+
//                       '<li class="item">Wed.</li>'+
//                       '<li class="item">Thur.</li>'+
//                       '<li class="item">Fri.</li>'+
//                       '<li class="item">Sat.</li>';
//       var _dateStr = '';
//       var _dayStr = '<i class="triangle"></i>'+
//                     '<p class="date"></p>'+
//                     '<p class="week"></p>';

//       for (var i = 0; i < 6; i++) {
//         _dateStr += '<li class="item">26</li>'+
//                     '<li class="item">26</li>'+
//                     '<li class="item">26</li>'+
//                     '<li class="item">26</li>'+
//                     '<li class="item">26</li>'+
//                     '<li class="item">26</li>'+
//                     '<li class="item">26</li>';
//       }

//       this.$calendar_title.html(_titleStr);
//       this.$calendar_week.html(_weekStr);
//       this.$calendar_date.html(_dateStr);
//       this.$calendar_today.html(_dayStr);

//       this.$calendar.append(this.$calendar_title, this.$calendar_week, this.$calendar_date, this.$calendar_today);
//       this.$calendar.show();
//     },

//     inital: function () { // Initialize
//       var self = this;

//       this.renderDOM();

//       this.$calendarTitle_text = this.$calendar_title.find('.title');
//       this.$backToday = $('#backToday');
//       this.$arrow_prev = this.$calendar_title.find('.arrow-prev');
//       this.$arrow_next = this.$calendar_title.find('.arrow-next');
//       this.$calendarDate_item = this.$calendar_date.find('.item');
//       this.$calendarToday_date = this.$calendar_today.find('.date');
//       this.$calendarToday_week = this.$calendar_today.find('.week');

//       this.showCalendar();

//       if (this.opts.ifSwitch) {
//         this.$arrow_prev.bind('click', function () {
//           var _date = dateObj.getDate();

//           dateObj.setDate(new Date(_date.getFullYear(), _date.getMonth() - 1, 1));

//           self.showCalendar();
//         });

//         this.$arrow_next.bind('click', function () {
//           var _date = dateObj.getDate();

//           dateObj.setDate(new Date(_date.getFullYear(), _date.getMonth() + 1, 1));

//           self.showCalendar();
//         });
//       }

//       if (this.opts.backToday) {
//         this.$backToday.bind('click', function () {
//           if (!self.$calendarDate_item.hasClass('item-curDay')) {
//             dateObj.setDate(new Date());

//             self.showCalendar();
//           }
//         });
//       }

//       this.$calendarDate_item.hover(function () {
//         self.showHoverInfo($(this));
//       }, function () {
//         self.$calendar_today.css({left: 0, top: 0}).hide();
//       });
//     },

//     constructor: Calendar
//   };

//   $.fn.calendar = function (options) {
//     var calendar = new Calendar(this, options);

//     return calendar.inital();
//   };


//   // ========== Functions ==========

//   var dateObj = (function () {
//     var _date = new Date();

//     return {
//       getDate: function () {
//         return _date;
//       },

//       setDate: function (date) {
//         _date = date;
//       }
//     }
//   })();

//   function returnDateStr(date) { // date to character string
//     var year = date.getFullYear();
//     var month = date.getMonth() + 1;
//     var day = date.getDate();

//     month = month < 9 ? ('0' + month) : ('' + month);
//     day = day < 9 ? ('0' + day) : ('' + day);

//     return year + month + day;
//   };

//   function changingStr(fDate) { // character string to date 
//     var fullDate = fDate.split("-");
    
//     return new Date(fullDate[0], fullDate[1] - 1, fullDate[2]); 
//   };

// })(jQuery, window, document);
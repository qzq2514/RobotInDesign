/*------------------------------------------------------
    Author : www.webthemez.com
    License: Commons Attribution 3.0
    http://creativecommons.org/licenses/by/3.0/
---------------------------------------------------------  */

(function ($) {
    "use strict";
    var mainApp = {

        initFunction: function () {
            /*MENU 
            ------------------------------------*/
            $('#main-menu').metisMenu();
			
            $(window).bind("load resize", function () {
                if ($(this).width() < 768) {
                    $('div.sidebar-collapse').addClass('collapse')
                } else {
                    $('div.sidebar-collapse').removeClass('collapse')
                }
            });

            /* MORRIS BAR CHART
			-----------------------------------------*/
            Morris.Bar({
                element: 'morris-bar-chart1',
                data: [{
                    y: '2016',
                    a: 758,
                }, {
                    y: '2017',
                    a: 930,
                }, {
                    y: '2018',
                    a: 1150,
                }, {
                    y: '2019',
                    a: 1420,
                }, {
                    y: '2020',
                    a: 1745,
                }, {
                    y: '2021',
                    a: 2140,
                }, {
                    y: '2022',
                    a: 2620,
                }],
                xkey: 'y',
                ykeys: ['a','b'],
                labels: ['AVG机器人规模及预测'],
				 barColors: ['#F09B22'],
                hideHover: 'auto',
                resize: true
            });
	 
Morris.Bar({
                element: 'morris-bar-chart2',
                data: [{
                    y: '2013',
                    a: 2439,
                }, {
                    y: '2014',
                    a: 3150,
                }, {
                    y: '2015',
                    a: 4300,
                }, {
                    y: '2016',
                    a: 6340,
                }, {
                    y: '2017',
                    a: 12900,
                }, {
                    y: '2018',
                    a: 18000,
                }],
                xkey: 'y',
                ykeys: ['a', 'b'],
                labels: ['AVG机器人销量'],
                 barColors: ['#FFCC66'],
                hideHover: 'auto',
                resize: true
            });

            /* MORRIS DONUT CHART
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "汽车工业",
                    value: 24
                }, {
                    label: "家电制造",
                    value: 22
                }, {
                    label: "3C电子",
                    value: 13
                }, {
                    label: "电商仓储物流",
                    value: 15
                }, {
                    label: "烟草制造",
                    value: 15
                }, {
                    label: "食品饮料",
                    value: 6
                }, {
                    label: "其他",
                    value: 5
                }],
				   colors: ['#CC6600','#FF9900','#CCCC00','#FF9966','#FFCC00','#FFCC66','#FFFF33'],
                resize: true
            });

            /* MORRIS AREA CHART
			----------------------------------------*/

            Morris.Area({
                element: 'morris-area-chart',
                data: [{
                    period: '2011',
                    Europe: 33,
                    America: 30,
                    Asia: 10
                }, {
                    period: '2012',
                    Europe: 40,
                    America: 32,
                    Asia: 18
                }, {
                    period: '2013',
                    Europe: 48,
                    America: 40,
                    Asia: 30
                }, {
                    period: '2014',
                    Europe: 60,
                    America: 66,
                    Asia: 50
                }, {
                    period: '2015',
                    Europe: 78,
                    America: 70,
                    Asia: 54
                }, {
                    period: '2016',
                    Europe: 89,
                    America: 74,
                    Asia: 57
                }, {
                    period: '2017',
                    Europe: 95,
                    America: 70,
                    Asia: 60
                }, {
                    period: '2018',
                    Europe: 99,
                    America: 84,
                    Asia: 63
                }],
                xkey: 'period',
                ykeys: ['Europe', 'America', 'Asia'],
                labels: ['Europe', 'America', 'Asia'],
                pointSize: 2,
                hideHover: 'auto',
				  pointFillColors:['#ffffff'],
				  pointStrokeColors: ['black'],
				  lineColors:['#A6A6A6','#F09B22','#87B209',],
                resize: true
            });

            /* MORRIS LINE CHART
			----------------------------------------*/
            Morris.Line({
                element: 'morris-line-chart',
                data: [
                      { y: '2013', a: 12.0, b: 12.1,c:12.0},
                      { y: '2014', a: 12.6, b: 9.0,c:10.2},
                      { y: '2015', a: 3.7,  b: 19.1,c:15.9},
                      { y: '2016', a: 18.0,  b: 29.2,c:10.7},
                      { y: '2017', a: 17.6,  b: 29.5,c:15.3},
                      { y: '2018', a: 9.2,  b: 32.3,c:12.0},
                      { y: '2019', a: 14.6,  b: 30.5,c:14.7},
                      { y: '2020', a: 20.3, b: 30.0,c:15.3},
				],
            
				 
      xkey: 'y',
      ykeys: ['a', 'b','c'],
      labels: ['工业机器人', '服务机器人','特种机器人'],
      fillOpacity: 0.6,
      hideHover: 'auto',
      behaveLikeLine: true,
      resize: true,
      pointFillColors:['#ffffff'],
      pointStrokeColors: ['black'],
      lineColors:['#0BA7F2','#F09B22','#009F22']
	  
            });
           
        
            $('.bar-chart').cssCharts({type:"bar"});
            $('.donut-chart').cssCharts({type:"donut"}).trigger('show-donut-chart');
            $('.line-chart').cssCharts({type:"line"});

            $('.pie-thychart').cssCharts({type:"pie"});
       
	 
        },

        initialization: function () {
            mainApp.initFunction();

        }

    }
    // Initializing ///

    $(document).ready(function () {
        mainApp.initFunction(); 
		$("#sideNav").click(function(){
			if($(this).hasClass('closed')){
				$('.navbar-side').animate({left: '0px'});
				$(this).removeClass('closed');
				$('#page-wrapper').animate({'margin-left' : '260px'});
				
			}
			else{
			    $(this).addClass('closed');
				$('.navbar-side').animate({left: '-260px'});
				$('#page-wrapper').animate({'margin-left' : '0px'}); 
			}
		});
    });

}(jQuery));

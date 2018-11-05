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
                element: 'morris-bar-chart',
                data: [{
                    y: '2013',
                    a: 19.0,
                    b: 3.3,
                    c: 1.5
                }, {
                    y: '2014',
                    a: 26.8,
                    b: 4.6,
                    c: 2.2
                }, {
                    y: '2015',
                    a: 30.0,
                    b: 6.4,
                    c: 3.0
                }, {
                    y: '2016',
                    a: 39.3,
                    b: 9.4,
                    c: 3.9
                }, {
                    y: '2017',
                    a: 51.2,
                    b: 12.8,
                    c: 5.4
                }, {
                    y: '2018',
                    a: 62.3,
                    b: 18.4,
                    c: 6.7
                }, {
                    y: '2019',
                    a: 75.7,
                    b: 28.0,
                    c: 8.4
                }, {
                    y: '2020',
                    a: 93.5,
                    b: 40.1,
                    c: 10.7
                }],
                xkey: 'y',
                ykeys: ['a', 'b','c'],
                labels: ['工业机器人', '服务机器人','特种机器人'],
				 barColors: ['#FF9933','#FFCC00','#FFCC66'],
                hideHover: 'auto',
                resize: true
            });
	 


            /* MORRIS DONUT CHART
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "工业机器人",
                    value: 71
                }, {
                    label: "服务机器人",
                    value: 21
                }, {
                    label: "特种机器人",
                    value: 8
                }],
				   colors: ['#FF9933','#FFCC00','#FFCC66'],
                resize: true
            });

            /* MORRIS AREA CHART
			----------------------------------------*/

            Morris.Area({
                element: 'morris-area-chart',
                data: [{
                    period: '2011',
                    chang: 56,
                    zhu: 45,
                    jin:30,
                    dong:50,
                    zhong:25,
                    xi: 10,

                }, {
                    period: '2012',
                    chang: 78,
                    zhu: 56,
                    jin:34,
                    dong:70,
                    zhong:38,
                    xi: 17
                }, {
                    period: '2013',
                    chang: 98,
                    zhu: 70,
                    jin:50,
                    dong:75,
                    zhong:45,
                    xi: 23
                }, {
                    period: '2014',
                    chang: 105,
                    zhu: 75,
                    jin:56,
                    dong:80,
                    zhong:60,
                    xi: 28
                }, {
                    period: '2015',
                    chang: 118,
                    zhu: 77,
                    jin:66,
                    dong:100,
                    zhong:74,
                    xi: 34
                }, {
                    period: '2016',
                    chang: 120,
                    zhu: 89,
                    jin:89,
                    dong:105,
                    zhong:90,
                    xi: 40
                }, {
                    period: '2017',
                    chang: 140,
                    zhu: 94,
                    jin:90,
                    dong:110,
                    zhong:102,
                    xi: 44
                }, {
                    period: '2018',
                    chang: 150,
                    zhu: 106,
                    jin:105,
                    dong:120,
                    zhong:130,
                    xi: 50
                }],
                xkey: 'period',
                ykeys: ['chang', 'zhu', 'jin','dong','zhong','xi'],
                labels: ['长三角', '珠三角', '津京冀','东北地区','中部地区','西部地区'],
                pointSize: 2,
                hideHover: 'auto',
				  pointFillColors:['#ffffff'],
				  pointStrokeColors: ['black'],
				  lineColors:['#CC6600','#FF9900','#CC9966','#FF9966','#FFCC00','#FFCC66'],
                resize: true
            });

            /* MORRIS LINE CHART
			----------------------------------------*/
            Morris.Line({
                element: 'morris-line-chart',
                data: [
                      { y: '2013', a: 30.4,  b: 30.4, c:34.5},
                      { y: '2014', a: 40.8,  b: 38.4, c:45.0},
                      { y: '2015', a: 12.0,  b: 37.1, c:36.5},
                      { y: '2016', a: 31.1,  b: 47.9, c:32.2},
                      { y: '2017', a: 30.2,  b: 36.2, c:39.2},
                      { y: '2018', a: 21.7,  b: 43.9, c:23.2},
                      { y: '2019', a: 21.4,  b: 52.1, c:25.4},
                      { y: '2020', a: 23.5,  b: 43.0, c:26.8},
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
      lineColors:['#FF9933','#FFCC00','#FFCC66']
	  
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

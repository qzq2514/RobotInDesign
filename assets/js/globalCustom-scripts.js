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
                    a: 95.0,
                    b: 32.2,
                    c: 20.5
                }, {
                    y: '2014',
                    a: 107.0,
                    b: 35.1,
                    c: 22.6
                }, {
                    y: '2015',
                    a: 111.0,
                    b: 41.8,
                    c: 26.2
                }, {
                    y: '2016',
                    a: 131.7,
                    b: 54.0,
                    c: 29.0
                }, {
                    y: '2017',
                    a: 154.2,
                    b: 69.9,
                    c: 33.4
                }, {
                    y: '2018',
                    a: 168.2,
                    b: 92.5,
                    c: 37.5
                }, {
                    y: '2019',
                    a: 192.7,
                    b: 120.7,
                    c: 43.0
                }, {
                    y: '2020',
                    a: 231.8,
                    b: 156.9,
                    c: 49.5
                }],
                xkey: 'y',
                ykeys: ['a', 'b','c'],
                labels: ['工业机器人', '服务机器人','特种机器人'],
				 barColors: ['#0BA7F2','#F09B22','#009F22'],
                hideHover: 'auto',
                resize: true
            });
	 


            /* MORRIS DONUT CHART
			----------------------------------------*/
            Morris.Donut({
                element: 'morris-donut-chart',
                data: [{
                    label: "工业机器人",
                    value: 56
                }, {
                    label: "服务机器人",
                    value: 31
                }, {
                    label: "特种机器人",
                    value: 13
                }],
				   colors: ['#0BA7F2','#F09B22','#009F22'],
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

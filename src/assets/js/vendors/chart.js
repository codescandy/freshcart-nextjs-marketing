// Chart js

const theme = {
	primary: 'var(--fc-primary)',
	secondary: 'var(--fc-secondary)',
	success: 'var(--fc-success)',
	info: 'var(--fc-info)',
	warning: 'var(--fc-warning)',
	danger: 'var(--fc-danger)',
	dark: 'var(--fc-dark)',
	light: 'var(--fc-light)',
	white: 'var(--fc-white)',
	gray100: 'var(--fc-gray-100)',
	gray200: 'var(--fc-gray-200)',
	gray300: 'var(--fc-gray-300)',
	gray400: 'var(--fc-gray-400)',
	gray500: 'var(--fc-gray-500)',
	gray600: 'var(--fc-gray-600)',
	gray700: 'var(--fc-gray-700)',
	gray800: 'var(--fc-gray-800)',
	gray900: 'var(--fc-gray-900)',
	black: 'var(--fc-black)',
	transparent: 'transparent',
};

// Add theme to the window object
window.theme = theme;

(function () {
	'use strict';

	if (document.getElementById('revenueChart')) {
		var options = {
			series: [
				{
					name: 'Total Income',
					data: [31, 40, 28, 51, 42, 67, 100],
				},
				{
					name: 'Total Expense',
					data: [78, 32, 45, 79, 34, 44, 38],
				},
			],
			labels: ['Jan', 'Feb', 'March', 'April', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
			chart: {
				height: 350,
				type: 'area',
				toolbar: {
					show: false,
				},
			},
			dataLabels: {
				enabled: false,
			},
			markers: {
				size: 5,
				hover: {
					size: 6,
					sizeOffset: 3,
				},
			},
			colors: ['#0aad0a', '#ffc107'],
			stroke: {
				curve: 'smooth',
				width: 2,
			},
			grid: {
				borderColor: window.theme.gray300,
			},
			xaxis: {
				labels: {
					show: true,
					align: 'right',
					minWidth: 0,
					maxWidth: 160,
					style: {
						fontSize: '12px',
						fontWeight: 400,
						colors: [window.theme.gray600],
						fontFamily: '"Inter", "sans-serif"',
					},
				},
				axisBorder: {
					show: true,
					color: window.theme.gray300,
					height: 1,
					width: '100%',
					offsetX: 0,
					offsetY: 0,
				},
				axisTicks: {
					show: true,
					borderType: 'solid',
					color: window.theme.gray300,
					height: 6,
					offsetX: 0,
					offsetY: 0,
				},
			},
			legend: {
				position: 'top',
				fontWeight: 600,
				color: window.theme.gray600,
				markers: {
					width: 8,
					height: 8,
					strokeWidth: 0,
					strokeColor: '#fff',
					fillColors: undefined,
					radius: 12,
					customHTML: undefined,
					onClick: undefined,
					offsetX: 0,
					offsetY: 0,
				},
				labels: {
					colors: window.theme.gray600,
					useSeriesColors: false,
				},
			},
			yaxis: {
				labels: {
					formatter: function (e) {
						return e + 'k';
					},
					show: true,
					align: 'right',
					minWidth: 0,
					maxWidth: 160,
					style: {
						fontSize: '12px',
						fontWeight: 400,
						colors: window.theme.gray600,
						fontFamily: '"Inter", "sans-serif"',
					},
				},
			},
		};

		var chart = new ApexCharts(document.getElementById('revenueChart'), options);
		chart.render();
	}

	if (document.getElementById('totalSale')) {
		var options = {
			series: [6000, 2000, 1000, 600],
			labels: ['Shippings', 'Refunds', 'Order', 'Income'],
			colors: ['#0aad0a', '#ffc107', '#db3030', '#016bf8'],
			chart: {
				type: 'donut',
				height: 280,
			},
			legend: {
				show: false,
			},
			dataLabels: {
				enabled: false,
			},
			plotOptions: {
				pie: {
					donut: {
						size: '85%',
						background: 'transparent',
						labels: {
							show: true,
							name: {
								show: true,
								fontSize: '22px',
								fontFamily: '"Inter", "sans-serif"',
								fontWeight: 600,
								colors: [window.theme.gray600],
								offsetY: -10,
								formatter: function (val) {
									return val;
								},
							},
							value: {
								show: true,
								fontSize: '24px',
								fontFamily: '"Inter", "sans-serif"',
								fontWeight: 800,
								colors: window.theme.gray800,
								offsetY: 8,
								formatter: function (val) {
									return val;
								},
							},
							total: {
								show: true,
								showAlways: false,
								label: 'Total Sales',
								fontSize: '16px',
								fontFamily: '"Inter", "sans-serif"',
								fontWeight: 400,
								colors: window.theme.gray400,
								formatter: function (w) {
									return w.globals.seriesTotals.reduce((a, b) => {
										return a + b;
									}, 0);
								},
							},
						},
					},
				},
			},
			stroke: {
				width: 0,
			},
			responsive: [
				{
					breakpoint: 1400,
					options: {
						chart: {
							type: 'donut',
							width: 290,
							height: 330,
						},
					},
				},
			],
		};

		var chart = new ApexCharts(document.getElementById('totalSale'), options);
		chart.render();
	}
})();

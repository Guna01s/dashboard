import { Card, Col, Row } from 'react-bootstrap'
import { ApexOptions } from 'apexcharts'
import ReactApexChart from 'react-apexcharts'

// components
import { CustomCardPortlet } from '@/components'

const weeklyChartOpts: ApexOptions = {
	series: [
		{
			name: 'Revenue',
			data: [440, 505, 414, 526, 227, 413, 201],
		},
	],
	chart: {
		height: 380,
		type: 'bar',
		toolbar: {
			show: false,
		},
	},
	plotOptions: {
		bar: {
			columnWidth: '70%',
			borderRadius: 5,
		},
	},
	stroke: {
		show: true,
		width: 1,
		colors: ['transparent'],
	},
	dataLabels: {
		enabled: false,
	},
	colors: ['#bf55ec'], //, '#1a2942', '#d1d7d973'
	xaxis: {
		categories: ['10.30', '11.30', '12.30', '1.30', '2.30', '3.30', '4.30'],
	},
	// yaxis: {
	// 	title: {
	// 		text: '$ (thousands)',
	// 	},
	// },
	legend: {
		offsetY: 0,
	},
	grid: {
		padding: {
			bottom: 5,
			top: 5,
		},
	},
	fill: {
		opacity: 1,
	},
	tooltip: {
		// y: {
		// 	formatter: function (val) {
		// 		return '$ ' + val + ' thousands'
		// 	},
		// },
	},
}

const WeeklySelesChart = () => {
	return (
		<div>
			<Col>
				<Card>
					<Card.Body>
						<div
							className="border-bottom"
							style={{
								display: 'flex',
								flexDirection: 'row',
								alignItems: 'center',
								color: 'black',
							}}>
							<div style={{ paddingRight: '25%' }}>
								<strong className="mb-0 fs-12" style={{ color: '#bf55ec' }}>
									Kilo
								</strong>
								<h2>
									88 kWh
									<strong
										className="text-danger mx-1 "
										style={{ fontSize: '14px', fontWeight: 'bold' }}>
										<i className="bi bi-arrow-up "></i> 3%
									</strong>
								</h2>
							</div>
							<div style={{ paddingLeft: '0', marginLeft: '0' }}>
								<strong className="mb-0 fs-12" style={{ color: '#bf55ec' }}>
									Total Expenses
								</strong>
								<h2>
									$10.52
									<strong
										className="text-danger mx-1 "
										style={{ fontSize: '14px', fontWeight: 'bold' }}>
										<i className="bi bi-arrow-up "></i> 8%
									</strong>
								</h2>
							</div>
						</div>

						{/* <div
							className="border-bottom"
							style={{
								display: 'flex',
								flexDirection: 'row',
								// marginRight: '50%',
								alignItems: 'center',
								color: 'black',
								// background: 'border',
							}}>
							<div
								style={{
									justifyContent: 'flex-start',
									paddingRight: '25%',
									// marginRight: '5%',
									// marginLeft: '150px',
								}}>
								<p className="mb-0">Kilo</p>
								<h2>88 kWh</h2>
							</div>
							<div
								className=""
								style={{
									justifyContent: 'flex-start',
									paddingLeft: '0%',
									marginLeft: '0',
								}}>
								<p className="mb-0">Total Expenses</p>
								<h2>$10.52</h2>
							</div>
						</div> */}
						{/* <Row className="text-center ">
							<Col>
								<p className=" ">Current Week</p>
								<h3 className=" mb-0">
									<span>$506.54</span>
								</h3>
							</Col>
							<Col>
								<p className="">Previous Week</p>
								<h3 className=" mb-0">
									<span>$305.25 </span>
								</h3>
							</Col>
						</Row> */}
						<div dir="ltr">
							<ReactApexChart
								height={200}
								// width={3}
								options={weeklyChartOpts}
								series={weeklyChartOpts.series}
								type="bar"
								className="apex-charts"
							/>
						</div>
					</Card.Body>
				</Card>
			</Col>
		</div>
	)
}

export default WeeklySelesChart

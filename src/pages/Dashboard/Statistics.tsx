import React, { useState } from 'react'
import { Card, Row, Col, Alert } from 'react-bootstrap'

interface StatisticWidget {
	title: string
	icon: string
	device: string
	variant: string
	change: string
}

const Statistics = ({ title, icon, device, variant }: StatisticWidget) => {
	const [action, setAction] = useState('Off')
	const [showAlert, setShowAlert] = useState(false)

	const handleToggleSwitch = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newAction = e.target.checked ? 'On' : 'Off'

		setAction(newAction)

		console.log(`You turned the device ${action}`)

		setShowAlert(true)

		setTimeout(() => {
			setShowAlert(false)
		}, 1000)

		fetchData()
	}

	const fetchData = () => {
		fetch('http://127.0.0.1:8000/api/save-toggle/', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				deviceStat: action === 'Off' ? 'On' : 'Off',
			}),
		})
			.then((response) => response.json())
			.then((data) => {
				console.log(data)
			})
			.catch((error) => {
				console.error('Error:', error)
			})
	}

	return (
		<Card
			className={`widget-flat text-bg-white text-black rounded-3`}
			style={{ height: '130px' }}>
			<Alert
				show={showAlert}
				variant={variant}
				onClose={() => setShowAlert(false)}
				dismissible
				style={{
					backgroundColor: '#f0f0ff',
					top: 15,
					position: 'fixed',
					left: '50%',
					transform: 'translateX(-50%)',
					zIndex: 9999,
				}}>
				You turned the device{' '}
				<span
					style={{
						marginLeft: '5px',
						fontWeight: '600',
						color: action === 'Off' ? 'red' : 'green',
					}}>
					{' '}
					{action}{' '}
				</span>
			</Alert>
			<Card.Body>
				<Row className="">
					<Card.Title
						className="col-auto font-weight-bold"
						style={{
							padding: '13px',
							background: '#edeaf6',
							borderRadius: '50px',
						}}>
						<div
							className="mx-auto bold"
							style={{
								fontSize: '20px',
								color: '#bf55ec',
								marginRight: '8px',
							}}>
							<i className={` ${icon} `}></i>
						</div>
					</Card.Title>
					<Col>
						<div
							style={{
								display: 'flex',
								alignItems: 'center',
								flexDirection: 'row',
							}}>
							<div>
								<h3
									className="my-0"
									title="Customers"
									style={{
										fontSize: '16px',
										padding: '2px',
										marginRight: '0px',
									}}>
									{title}
								</h3>
							</div>
							<div
								style={{
									alignItems: 'center',
									paddingLeft: '20%',
									marginLeft: '10px',
								}}>
								<label className="switch-toggle">
									<input
										type="checkbox"
										value={action}
										onChange={(e) => handleToggleSwitch(e)}
									/>
									<span className="slider-toggle"></span>
								</label>
							</div>
						</div>
						<p className="fs-12 my-01 ">
							<strong style={{ fontSize: '14px' }}>{device}</strong>{' '}
							&nbsp;&nbsp;&nbsp;
							<i className="bi bi-caret-right-fill me-2"></i>
							<span
								className="text-danger mx-1 "
								style={{ fontSize: '10px', fontWeight: 'bold' }}>
								<i className="bi bi-arrow-up"></i> 100
							</span>
							<span
								className="text-success mx-0"
								style={{ fontSize: '10px', fontWeight: 'bold' }}>
								<i className="bi bi-arrow-down"></i> 50
							</span>
						</p>
					</Col>
				</Row>
				<Row className="my-0 mb-0 ">
					<div className="fs-6 pb-2 ">
						<div>
							<button
								className="me-1 bg-light p-1 ms-0 rounded-pill"
								style={{ border: 'none' }}>
								<i
									className="bi bi-fire font-weight-bold "
									style={{ color: '#bf55ec ' }}></i>{' '}
								&nbsp;
								{device}
							</button>
							&nbsp;
							<button
								className="me-1 bg-light p-1 rounded-pill"
								style={{ border: 'none' }}>
								<i
									className="bi bi-tv font-weight-bold"
									style={{ color: '#bf55ec ', border: 'none' }}></i>{' '}
								&nbsp;{device}
							</button>
							&nbsp;
							<button
								className="bg-light p-1 rounded-pill"
								style={{ border: 'none' }}>
								<i
									className="bi bi-lightbulb font-weight-bold"
									style={{ color: '#bf55ec ' }}></i>{' '}
								&nbsp;{device}
							</button>
						</div>
					</div>
				</Row>
			</Card.Body>
		</Card>
	)
}

export default Statistics

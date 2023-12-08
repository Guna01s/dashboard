import { Card, Row, Col } from 'react-bootstrap'
import './style.css'
const SetupDiv = () => {
	return (
		<Card
			className={`widget-flat text-bg-white text-black rounded-3`}
			style={{ height: '130px', background: '#f5ebff' }}>
			<Card.Body>
				<Row className="">
					<Card.Title
						className=" col-auto font-weight-bold"
						style={{
							padding: '18px',
							// display: 'flex',
							flexDirection: 'row',
							background: '#d2d2f7',
							borderRadius: '50px',
							alignItems: 'center',
							marginTop: '12px',
						}}>
						<div
							className="mx-auto bold"
							style={{
								fontSize: '20px',
								color: '#bf55ec',
								marginRight: '8px',
							}}>
							<i className="bi bi-emoji-smile-fill"></i>
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
									Setup a Device
								</h3>
								<p className="mt-1">
									Make sure that the device is in the <br /> same room before
								</p>
							</div>
						</div>
					</Col>
				</Row>
			</Card.Body>
		</Card>
	)
}

export default SetupDiv

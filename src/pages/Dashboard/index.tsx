import { Col, Row } from 'react-bootstrap'
import Statistics from './Statistics'
import WeeklySelesChart from './WeeklySelesChart'
import Datacharts from './datacharts'
import ChatList from './ChatList'
import Projects from './Projects'

// data
import { chatMessages, statistics } from './data'
import SetupDiv from './SetupDiv'

const Dashboard = () => {
	return (
		<div
			className="mt-3"
			style={{
				background: '#f0f0ff',
			}}>
			<Row>
				<Col lg={6}>
					<h4 className="text-black mb-2  fs-14">Energy Consumption</h4>
					<WeeklySelesChart />
				</Col>

				<Col lg={6}>
					<h4 className="text-black mb-2 fs-14">
						Consumption forecaste for today
					</h4>
					<Datacharts />
				</Col>
			</Row>
			<h4 className="text-black mb-2 font-weight-bold">Rooms</h4>
			<Row xs={1} md={2} lg={3} className="g-2">
				<Col>
					<SetupDiv />
				</Col>
				{statistics.slice(0, 3).map((item, idx) => (
					<Col key={idx}>
						<Statistics
							title={item.title}
							device={item.device}
							change={item.change}
							icon={item.icon}
							variant={item.variant}
						/>
					</Col>
				))}
			</Row>

			<Row xs={1} md={2} lg={3} className="g-3">
				{statistics.slice(4).map((item, idx) => (
					<Col key={idx}>
						<Statistics
							title={item.title}
							device={item.device}
							change={item.change}
							icon={item.icon}
							variant={item.variant}
						/>
					</Col>
				))}
			</Row>
			{/* 
			<Row>
				<Col xl={4}>
					<ChatList messages={chatMessages} />
				</Col>

				<Col xl={8}>
					<Projects />
				</Col>
			</Row> */}
		</div>
	)
}

export default Dashboard

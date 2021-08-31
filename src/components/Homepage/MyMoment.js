import Moment from "react-moment";
import "./MyMoment.css";
export default function MyMoment() {
	return (
		<div className="moment-container">
			<Moment className="Date" format="LL" />
			<Moment className="Day" format="(dddd)" />
			<Moment className="Time" interval={59000} format="LT" />
		</div>
	);
}

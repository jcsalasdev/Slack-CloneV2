import Moment from "react-moment";
import "./MyMoment.css";
export default function MyMoment() {
	return (
		<div className="moment-container">
			<Moment className="Time moment" interval={1000} format="LT" />
			<Moment className="Date moment" format="(dddd)LL" />
		</div>
	);
}

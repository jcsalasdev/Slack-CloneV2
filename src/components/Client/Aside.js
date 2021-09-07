import "./Aside.css";

export default function AsideNav() {
  return (
    <div className="Aside-container">
      <h1>Avion School</h1>
      <div className="aside-btn-container" >
        <div className="aside-btn">
          <h5>Channels</h5>
          <button className="fas fa-plus action"  />
        </div>
      </div>
      <div>
      <div className="aside-btn">
            <h5>Direct Messages</h5>
            <button className="fas fa-plus action" />
        </div>
      </div>
    </div>
  );
}

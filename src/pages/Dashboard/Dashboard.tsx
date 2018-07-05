import * as React from "react";
import InvoicesCard from "../../components/InvoicesCard";
import "./style.css";

const Dashboard = () => {
  return (
    <div className="dashboard">
            <div className="feed">
                <div className="cards">
                    <InvoicesCard />
                    <InvoicesCard />
                </div>
                {/* <Notifications /> */}
            </div>
            <div className="summary">
                <div className="summaryCard">
                    <div className="totalCashWrapper">
                        <h6>Total Cash</h6>
                        <h5>$11,200</h5>
                    </div>
                    {/* <Divider />
                    <Progress className="bar" multi>
                        <Progress bar color="info" value="75" />
                        <Progress bar color="danger" value="25" />
                    </Progress> */}
                </div>
            </div>
        </div>
  );
};
export default Dashboard;

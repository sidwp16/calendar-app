import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LogItem } from "./LogItem";
import Select from "../common/Select";

import { searchLogs, getLogs } from "../../actions/logAction";

const Logs = () => {
  const dispatch = useDispatch();

  const { logs, loading } = useSelector((state) => state.log);

  const [filter, setFilter] = useState("");

  useEffect(() => {
    // dispatch(searchLogs(filter.filter));
  }, [filter]);

  const options = {
    status: [
      {
        id: 1,
        name: "PENDING",
      },
      {
        id: 2,
        name: "ON-GOING",
      },
      {
        id: 3,
        name: "DONE",
      },
    ],
  };

  const onChange = (e) => {
    setFilter({ ...filter, [e.target.name]: e.target.value });
    dispatch(searchLogs(filter.filter));
  };

  return (
    <>
      <Select
        label="Filter"
        name="filter"
        onChange={onChange}
        value={filter.filter || ""}
        options={options.status}
      />
      {!loading && logs.length === 0 ? (
        <p className="center">No Logs to show...</p>
      ) : (
        logs.map((log) => <LogItem log={log} key={log.id} />)
      )}
      <div id="addbutton">
        <Link to="/add">
          <button className="btn btn-primary btn-circle">
            <i className="fa fa-plus" aria-hidden="true"></i>
          </button>
        </Link>
      </div>
    </>
  );
};

export default Logs;

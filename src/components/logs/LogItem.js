import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { setCurrent } from "../../actions/logAction";

export const LogItem = ({ log }) => {
  const dispatch = useDispatch();

  const { logs, loading, current } = useSelector((state) => state.log);
  const { title, date, status } = log;

  return (
    <Link to="/edit" onClick={() => dispatch(setCurrent(log))}>
      <div className="card w-75 w-auto mb-4">
        <div className="card-body">
          <p className="card-text">{title}</p>

          <div className="d-flex bd-highlight mb-3">
            <div className="mr-auto bd-highlight">
              <h6>{status}</h6>
            </div>
            <div className="bd-highlight">{date}</div>
          </div>
        </div>
      </div>
    </Link>
  );
};

import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../common/Input";
import Select from "../common/Select";

import {
  updateLog,
  deleteLog,
  clearCurrent,
  getLogs,
} from "../../actions/logAction";

const AddLog = () => {
  const dispatch = useDispatch();

  const { current } = useSelector((state) => state.log);

  const history = useHistory();

  const [editLog, setEditLog] = useState({
    title: "",
    date: "",
    status: "",
  });

  const { title, date, status, createdAt } = editLog;

  useEffect(() => {
    if (!current) {
      history.push("/");
    }

    if (current) {
      const { title, date, status } = current;

      setEditLog({ title, date, status });
    }

    dispatch(getLogs());
  }, [getLogs]);

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || status === "" || date === "") {
      toast.error("Field is required.");
      return;
    }

    const editLog = {
      id: current.id,
      title,
      date,
      status,
      updatedAt: new Date(),
    };

    dispatch(updateLog(editLog));

    toast.success("Log updated.");
  };

  const onDelete = () => {
    dispatch(deleteLog(current.id));
    toast.success("Log deleted.");
    // dispatch(clearCurrent());
    history.push("/");
  };

  const onChange = (e) => {
    setEditLog({
      ...editLog,
      [e.target.name]: e.target.value,
    });
  };

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

  return (
    <>
      <div className="mb-4 mt-4">
        <a href="#!" onClick={() => history.push("/")} className="back">
          <i style={{ fontSize: 21 }} className="fa">
            &#xf104;
          </i>
        </a>
        <h2 className="text-center">{title}</h2>
      </div>
      <Input
        label="Title"
        name="title"
        onChange={onChange}
        smallText="(Optional)"
        value={title || ""}
      />
      <Input
        label="Date"
        name="date"
        type="date"
        onChange={onChange}
        smallText="(Optional)"
        value={date || ""}
      />
      <Select
        label="Status"
        name="status"
        onChange={onChange}
        value={status || ""}
        options={options.status}
      />
      <button type="button" className="btn btn-danger mr-2" onClick={onDelete}>
        Delete
      </button>
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Update
      </button>
    </>
  );
};

export default AddLog;

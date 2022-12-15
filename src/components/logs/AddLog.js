import React, { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import Input from "../common/Input";
import Select from "../common/Select";

import { addLog } from "../../actions/logAction";

const AddLog = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const [booking, setBooking] = useState({
    title: "",
    date: "",
    status: "",
    createdAt: "",
  });

  const { title, date, status, createdAt } = booking;

  const onSubmit = (e) => {
    e.preventDefault();

    if (title === "" || status === "" || date === "") {
      toast.error("Field is required.");
      return;
    }

    const newLog = {
      title,
      date,
      status,
      createdAt: new Date(),
    };

    dispatch(addLog(newLog));

    toast.success("Log Added!");

    setBooking({
      title: "",
      date: "",
      status: "",
      createdAt: "",
    });
  };

  const onChange = (e) => {
    setBooking({
      ...booking,
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
        <a href="#!" onClick={() => history.goBack()} className="back">
          <i style={{ fontSize: 21 }} className="fa">
            &#xf104;
          </i>
        </a>
        <h2 className="text-center">CREATE</h2>
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
      <button type="submit" className="btn btn-primary" onClick={onSubmit}>
        Add
      </button>
    </>
  );
};

export default AddLog;

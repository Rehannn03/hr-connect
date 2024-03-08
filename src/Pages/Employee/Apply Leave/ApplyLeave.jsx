import React, { useState } from "react";
import axios from "axios";
import {
  TextField,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  FormHelperText,
  Typography,
  Alert,
  Snackbar
} from "@mui/material";

const ApplyForLeave = () => {
  const [fromDate, setFromDate] = useState("");
  const [toDate, setToDate] = useState("");
  const [reason, setReason] = useState("");
  const [numberOfDays, setNumberOfDays] = useState(0);
  const [open, setOpen] = useState(false);
  const calculateDays = () => {
    const startDate = new Date(fromDate);
    const endDate = new Date(toDate);
    const diffInMs = Math.abs(endDate - startDate);
    const days = Math.ceil(diffInMs / (1000 * 60 * 60 * 24));
    setNumberOfDays(days);
  };

  const handleApply = () => {
    // Submit leave application logic here
    
    console.log("Leave application submitted:", {
      fromDate,
      toDate,
      reason,
      numberOfDays,
    });
    // Reset state after successful submission
    <Alert icon={<CheckIcon fontSize="inherit" />} severity="success">
      Here is a gentle confirmation that your action was successful.
    </Alert>;
  };
  const handleClose = () => {
    setOpen(false); // Close the Alert on user interaction
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    setOpen(true);  
    const response = axios.post(
      "http://localhost:3000/api/v1/employees/applyleave",
      {
        fromDate: fromDate,
        toDate: toDate,
        reason: reason,
        numberOfDays: numberOfDays,
      }
    );
    response.then((res) => {
      console.log(res.data);
      if (res.status === 200) {
        setFromDate("");
        setToDate("");
        setReason("");
        setNumberOfDays(0);
      }
    });
  };
  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">
        <Typography variant="h5" component="h2" gutterBottom>
        Apply for Leave
      </Typography>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <TextField
            label="From Date"
            type="date"
            value={fromDate}
            onChange={(e) => setFromDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
          />
        </div>
        <div>
          <TextField
            label="To Date"
            type="date"
            value={toDate}
            onChange={(e) => setToDate(e.target.value)}
            InputLabelProps={{ shrink: true }}
            required
            onBlur={calculateDays}
          />
        </div>
        <div>
          <FormControl fullWidth required>
            <InputLabel id="reason-label">Reason for Leave</InputLabel>
            <Select
              labelId="reason-label"
              value={reason}
              label="Reason for Leave"
              onChange={(e) => setReason(e.target.value)}
            >
              <MenuItem value="Vacation">Vacation</MenuItem>
              <MenuItem value="Sick Leave">Sick Leave</MenuItem>
              <MenuItem value="Personal Leave">Personal Leave</MenuItem>
              {/* Add more options as needed */}
            </Select>
            <FormHelperText>Please select a reason.</FormHelperText>
          </FormControl>
        </div>
        <div className="flex justify-between">
          <p className="text-gray-700">Number of Days: {numberOfDays}</p>
          <Button
            variant="contained"
            color="primary"
            disabled={!fromDate || !toDate || !reason}
            onClick={handleSubmit}
          >
            Apply
          </Button>
        </div>
        <Snackbar open={open} autoHideDuration={2000} onClose={handleClose}>
        <Alert severity="success">Leave application submitted successfully!</Alert>
      </Snackbar>
      </form>
    </div>
  );
};

export default ApplyForLeave;

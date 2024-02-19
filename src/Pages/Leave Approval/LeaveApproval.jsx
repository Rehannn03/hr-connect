import React, { useState, useEffect } from 'react';
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  Paper,
  Typography,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  DialogContentText,
  DialogActions,
} from '@mui/material';
import axios from 'axios';

const LeaveApprovalPage = () => {
  const [leaves, setLeaves] = useState([]);
  const [selectedLeave, setSelectedLeave] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);

  useEffect(() => {
    // Fetch leave data from your backend API
    axios.get('https://localhost:3000/api/v1/admin/leaves')
      .then((response) => response.json())
      .then((data) => setLeaves(data));
  }, []);

  const handleApproveLeave = () => {
    // Update leave status to approved on your backend API
    fetch(`/api/leaves/${selectedLeave.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'approved' }),
    })
      .then((response) => response.json())
      .then(() => {
        setLeaves(leaves.map((leave) => (leave.id === selectedLeave.id ? { ...leave, status: 'approved' } : leave)));
        setSelectedLeave(null);
        setOpenDialog(false);
      });
  };

  const handleRejectLeave = () => {
    // Update leave status to rejected on your backend API
    fetch(`/api/leaves/${selectedLeave.id}`, {
      method: 'PATCH',
      body: JSON.stringify({ status: 'rejected' }),
    })
      .then((response) => response.json())
      .then(() => {
        setLeaves(leaves.filter((leave) => leave.id !== selectedLeave.id));
        setSelectedLeave(null);
        setOpenDialog(false);
      });
  };

  const handleOpenDialog = (leave) => {
    setSelectedLeave(leave);
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setSelectedLeave(null);
    setOpenDialog(false);
  };

  return (
    <div className="container mx-auto p-4 bg-white rounded-lg shadow-md">

      <Typography variant="h5" component="h2" gutterBottom>
        Leave Approvals
      </Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow>
              <TableCell>Employee Name</TableCell>
              <TableCell>From Date</TableCell>
              <TableCell>To Date</TableCell>
              <TableCell>Reason</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {leaves.map((leave) => (
              <TableRow key={leave.id}>
                <TableCell>{leave.employeeName}</TableCell>
                <TableCell>{leave.fromDate}</TableCell>
                <TableCell>{leave.toDate}</TableCell>
                <TableCell>{leave.reason}</TableCell>
                <TableCell>{leave.status}</TableCell>
                <TableCell>
                  {leave.status === 'pending' && (
                    <Button
                      variant="contained"
                      color="primary"
                      size="small"
                      onClick={() => handleOpenDialog(leave)}
                    >
                      Review
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Dialog open={openDialog} onClose={handleCloseDialog}/>
        <DialogTitle>Review Leave Request</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to {selectedLeave?.status === 'pending' ? 'approve' : 'reject'} this leave request?
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog}>Cancel</Button>
          {selectedLeave?.status === 'pending' && (
            <DialogActions>
              <Button onClick={handleRejectLeave} color="error">
                Reject
              </Button>
              <Button onClick={handleApproveLeave} variant="contained" color="primary">
                Approve
              </Button>
            </DialogActions>)}
            </DialogActions>
    </div>
          )}

export default LeaveApprovalPage;

import React, { useEffect } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "./orderslist.scss";
import { useDispatch, useSelector } from "react-redux";
import { ordersFetch } from "../../slices/ordersSlice";
import moment from "moment";

export default function OrdersList() {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(ordersFetch());
  }, [dispatch]);

  const rows =
    list &&
    list.map((order) => {
      return {
        id: order._id,
        name: order.shipping.name,
        amount: order.total / 100?.toLocaleString,
        status: order.delivery_status,
        date: moment(order.createdAt).fromNow(),
      };
    });

  const columns = [
    { field: "id", headerName: "ID", width: 100 },
    {
      field: "name",
      headerName: "Name",
      width: 120,
    },
    { field: "amount", headerName: "Amount($)", width: 100 },
    {
      field: "Status",
      headerName: "Status",
      width: 100,
      renderCell: (params) => {
        return (
          <div>
            {params.row.status === "pending" ? (
              <div>Pending</div>
            ) : params.row.status === "approved" ? (
              <div>Approved</div>
            ) : (
              "error"
            )}
          </div>
        );
      },
    },

    { field: "date", headerName: "Date", width: 120 },

    {
      field: "actions",
      headerName: "Actions",
      sortable: false,
      width: 170,
      renderCell: (params) => {
        return (
          <div>
            <button>Approved</button>
            <button>View</button>
          </div>
        );
      },
    },
  ];

  return (
    <div className="OrdersList">
      <div style={{ height: 400, width: "100%" }} className="Table__order">
        <DataGrid
          className="DataGrid"
          rows={rows}
          columns={columns}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
}

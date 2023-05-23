import React from "react";
import { Outlet, useNavigate } from "react-router";
import { DataGrid } from "@mui/x-data-grid";
import "./inventory.scss";
import { useDispatch, useSelector } from "react-redux";
import { productsDelete } from "../slices/productsSlice";
import EditProduct from "./component-pages/EditProduct";

export default function Inventory() {
  const { items } = useSelector((state) => state.products);
  const rows =
    items &&
    items.map((item) => {
      return {
        id: item._id,
        imageUrl: item.image.url,
        Name: item.name,
        Price: item.price.toLocaleString(),
        Countinstock: item.countinstock,
        Stockstatus: item.stockstatus,
        Category: item.category,
      };
    });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(productsDelete(id));
  };

  const columns = [
    { field: "id", headerName: "ID", width: 100 ,},
    {
      field: "imageUrl",
      headerName: "Image",
      width: 120,
      renderCell: (params) => {
        return (
          <div className="ImageContainer">
            <img src={params.row.imageUrl} alt="" />
          </div>
        );
      },
    },
    { field: "Name", headerName: "Product", width: 170 },
    { field: "Category", headerName: "Category", width: 120 },
    { field: "Price", headerName: "Price", width: 100 },
    {
      field: "Countinstock",
      headerName: "Stock",
      width: 100,
    },
    {
      field: "Stockstatus",
      headerName: "Stock Status",
      width: 150,
    },
    {
      field: "actions",
      headerName: "Actions",
      width: 160,
      renderCell: (params) => {
        return (
          <div className="Actions">
            <button
              onClick={() => handleDelete(params.row.id)}
              className="button__delete"
            >
              Delete
            </button>
            <EditProduct prodId={params.row.id} />
          </div>
        );
      },
    },
  ];

  return (
    <div className="Inventory">
      <div className="Button__create">
        <button
          onClick={() => navigate("/create-product")}
          className="Button_name"
        >
          CREATE
        </button>
        <Outlet />
      </div>
      <div style={{ height: 400, width: "100%" }} className="Table">
        <DataGrid
          className="DataGrid"
          rows={rows}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </div>
    </div>
  );
}

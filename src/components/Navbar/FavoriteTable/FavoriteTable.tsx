import React, { useState } from "react";
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from "react-redux";
import { Person } from "@/models";
import { AppStore } from "@/redux/store";
import { addFavorite, removeFavorite } from "@/redux/states";
import { IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';

export interface FavoriteTableInterface {}

const FavoriteTable: React.FC<FavoriteTableInterface> = () => {
    const [ selectedPeople, setSelectedPeople ] = useState<Person[]>([]);
    const dispatch = useDispatch();  
    const stateFavorites = useSelector((store: AppStore) => store.favorites);
  
    const handleClick = (person: Person) => {
        dispatch(removeFavorite(person))
    }

    const columns = [
        {
          field: "actions",
          type: "actions",
          sortable: false,
          headerName: "",
          minWidth: 50,
          renderCell: (params: GridRenderCellParams) => (
            <>
            <IconButton  color="primary" aria-label="favorites" component="label" onClick={() => handleClick(params.row)}>
             <DeleteIcon />
            </IconButton>
            </>
          ) 
        },
        {
          field: "name",
          headerName: "Name",
          flex: 1,
          minWidth: 150,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
          field: "category",
          headerName: "Category",
          flex: 1,
          minWidth: 150,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
          field: "company",
          headerName: "Company",
          flex: 1,
          minWidth: 150,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
        {
          field: "levelOfHappiness",
          headerName: "Level of Happiness",
          flex: 1,
          minWidth: 150,
          renderCell: (params: GridRenderCellParams) => <>{params.value}</>
        },
    
      ]


    return (
        <DataGrid 
        initialState={{
          pagination: { paginationModel: { pageSize: 5 } },
        }}
        pageSizeOptions={[5, 10, 25]}
        rows={stateFavorites}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight     
        getRowId={(row: any) => row.id}
      />
    )
};

export default FavoriteTable;
import React, { useEffect, useState } from 'react';
import { Person } from '@/models';
import { addFavorite } from '@/redux/states';
import { AppStore } from '@/redux/store';
import { Checkbox } from '@mui/material';
import { DataGrid, GridRenderCellParams } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';

export interface PeopleTableInterface {}

const PeopleTable: React.FC<PeopleTableInterface> = () => {
    const [ selectedPeople, setSelectedPeople ] = useState<Person[]>([]);
    const dispatch = useDispatch();
    
    const statePeople = useSelector((store: AppStore) => store.people);
    const favoritePeople = useSelector((store: AppStore) => store.favorites);
    const findPerson = (person: Person) => !!favoritePeople.find(p => p.id === person.id);
    const filterPerson = (person: Person) => favoritePeople.filter(p => p.id !== person.id);
  
    const handleChange = (person: Person) => {
      const filteredPeople = findPerson(person) ? filterPerson(person) : [...selectedPeople, person];
      dispatch(addFavorite(filteredPeople));
      setSelectedPeople(filteredPeople); 
    }

    useEffect(() =>{
      setSelectedPeople(favoritePeople);
    }, [favoritePeople])

    const columns = [
        {
          field: "actions",
          type: "actions",
          sortable: false,
          headerName: "",
          minWidth: 50,
          renderCell: (params: GridRenderCellParams) => (
            <>
              <Checkbox
                size='small'
                checked={findPerson(params.row)}
                onChange={() => handleChange(params.row)}
              />
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
        rows={statePeople}
        columns={columns}
        disableColumnSelector
        disableRowSelectionOnClick
        autoHeight     
        getRowId={(row: any) => row.id}
        sx={{
          background: "white smoke", 
          mt: 6
        }}
      />
    )
};

export default PeopleTable;
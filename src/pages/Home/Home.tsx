import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Data } from "@/data/data";
import { addFavorite, addPeople } from '@/redux/states';
import PeopleTable from './components/peopleTable';

export interface HomeInterface {};

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(Data));
  }, [])
  
  return (
    <PeopleTable />
  )
};

export default Home;


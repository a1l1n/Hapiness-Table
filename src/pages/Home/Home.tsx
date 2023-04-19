import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Data } from "@/data/data";
import { addPeople } from '@/redux/states';
import PeopleTable from './components/peopleTable';

export interface HomeInterface {};

const Home: React.FC<HomeInterface> = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(addPeople(Data));
  }, [])
  
  return (
    <div className='home_container'>
      <PeopleTable />
    </div>
  )
};



export default Home;


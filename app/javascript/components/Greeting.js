import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Greetings } from '../store/greetingSlice';

const Greeting = () => {
  const dispatch = useDispatch();
  const greeting = useSelector((state) => state.greetings.value);

  useEffect(() => {
    dispatch(Greetings());
  }, [dispatch]);

  return (
    <div>
      <h2>Greeting Words</h2>
      <div>{greeting}</div>
    </div>
  );
};

export default Greeting;
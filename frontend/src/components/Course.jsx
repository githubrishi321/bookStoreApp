<<<<<<< HEAD
import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
function Course() {
  const [book, setBook] = useState([]);
  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);
  return (
    <>
      <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl  md:text-4xl">
            We're delighted to have you{" "}
            <span className="text-pink-500"> Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro,
            assumenda? Repellendus, iste corrupti? Tempore laudantium
            repellendus accusamus accusantium sed architecto odio, nisi expedita
            quas quidem nesciunt debitis dolore non aspernatur praesentium
            assumenda sint quibusdam, perspiciatis, explicabo sequi fugiat amet
            animi eos aut. Nobis quisquam reiciendis sunt quis sed magnam
            consequatur!
          </p>
          <Link to="/">
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
=======
import React from 'react';
import Cards from './Cards';
import list from "../../public/list.json";
import { Link } from "react-router-dom";

function Course() {
  return (
    <>
      <div className='max-w-screen-2xl container mx-auto md:px-20 px-4'>
        <div className='mt-28 items-center justify-center text-center'>
          <h1 className='text-2xl md:text-4xl'>We're delighted to have you{" "}
            <span className='text-pink-500'>Here! :)</span>
          </h1>
          <p className='mt-12'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus illo asperiores nemo labore perspiciatis ea voluptas optio consectetur vero ipsum exercitationem expedita suscipit, facilis architecto modi numquam! Quos, consequuntur obcaecati!
          </p>
          <Link to="/">
            <button className='mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300'>
>>>>>>> 20e288ccfc57be25cfbb9c5467db4342adeaf7f6
              Back
            </button>
          </Link>
        </div>
<<<<<<< HEAD
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {book.map((item) => (
=======
        <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
          {list.map((item) => (
>>>>>>> 20e288ccfc57be25cfbb9c5467db4342adeaf7f6
            <Cards key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

<<<<<<< HEAD
export default Course;
=======
export default Course;
>>>>>>> 20e288ccfc57be25cfbb9c5467db4342adeaf7f6

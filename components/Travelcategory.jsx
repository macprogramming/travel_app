import React from "react";
import DoneAllIcon from '@mui/icons-material/DoneAll';
import Link from "next/link";

const Travelcategory = () => {
  return(
    <>
      <h3 className="text-custom-primary my-4">Travel Category :</h3>
        <ul class="list-group">
          <li class="list-group-item border-0 px-0">
            <DoneAllIcon htmlColor="#fe4340" />&nbsp;
            <Link href='/' className="text-custom-primary text-decoration-none">Adventure (03)</Link>
          </li>
          <li class="list-group-item border-0 px-0">
            <DoneAllIcon htmlColor="#fe4340" />&nbsp;
            <Link href='/' className="text-custom-primary text-decoration-none">Family Adventure (03)</Link>
          </li>
          <li class="list-group-item border-0 px-0">
            <DoneAllIcon htmlColor="#fe4340" />&nbsp;
            <Link href='/' className="text-custom-primary text-decoration-none">Couple Tour (03)</Link>
          </li>
          <li class="list-group-item border-0 px-0">
            <DoneAllIcon htmlColor="#fe4340" />&nbsp;
            <Link href='/' className="text-custom-primary text-decoration-none">Popular Tour's (03)</Link>
          </li>
          <li class="list-group-item border-0 px-0">
            <DoneAllIcon htmlColor="#fe4340" />&nbsp;
            <Link href='/' className="text-custom-primary text-decoration-none">Travel Vaction (03)</Link>
          </li>
        </ul>
    </>
  )
}

export default Travelcategory;
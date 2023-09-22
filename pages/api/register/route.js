import connectDB from "@/pages/db";
import User from "@/pages/models/user";
import { hash } from "bcryptjs";
import Joi from "joi";
import { NextResponse } from "next/server";

const schema = Joi.object({
  firstname: Joi.string().required(),
  lastname: Joi.string().required(),
  email: Joi.string().required(),
  mobilenumber: Joi.string().required(),
  password: Joi.string().min(6).required(),
  confirmpassword: Joi.string().min(6).required(),
  role: Joi.string().min(6).required(),
  gender: Joi.string().min(6).required(),
});

export const dynamic = 'force-dynamic';

export default async function POST(req){
  await connectDB();

  const { firstname, lastname, email, mobilenumber, password, confirmpassword, role, gender } = await req.json();

  const {error} = schema.validate({ firstname, lastname, email, mobilenumber, password, confirmpassword, role, gender })

  if(error) {
    return NextResponse.json({
      success : false,
      message : email.details[0]
    })
  }

  try {

    const isUserAlreadyExits = await User.findOne({ email });
    if(isUserAlreadyExits) {
      return NextResponse.json({
        success: false,
        message : 'User is already exits. Please try with diffrent email.'
      })
    } else {
      const hashPassword = await hash(password, 12);
      
      const createdNewUser = await User.create({
        firstname, lastname, email, mobilenumber, password : hashPassword, confirmpassword : hashPassword, role, gender
      });

      if (createdNewUser) {
        return NextResponse.json({
          success: true,
          message: 'Account created successfully.'
        })
      }
    }

  } catch(err) {
    console.log(err);
    return NextResponse.json({
      success: false,
      message: 'Something went wrong | please try again later'
    })
  }
}

// const register = () => {
//   return(
//     <h1>Hello world</h1>
//   )
// }

// export default register;
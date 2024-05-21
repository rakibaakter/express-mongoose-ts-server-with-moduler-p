import { Request, Response } from 'express';
import { studentServices } from './student.service';

const createStudent = async (req: Request, res: Response) => {
  try {
    const { student: studentData } = req.body;

    //   will call service func to send this data
    const result = await studentServices.createStudentIntoDB(studentData);

    // will send response
    res.status(200).json({
      success: true,
      message: 'Student has been created successfully',
      data: result,
    });
  } catch (err) {
    console.log(err);
  }
};

export const studentControllers = {
  createStudent,
};

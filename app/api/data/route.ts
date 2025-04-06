import { NextResponse } from 'next/server';
import { connectDb } from '../../../lib/mongoose';
// import YourModel from '../../../models/YourModel';

export async function GET() {
  try {
    await connectDb();
    // const data = await YourModel.find({});
    return NextResponse.json("connected");
  } catch (error) {
    return NextResponse.json({ error: 'Failed to fetch data' }, { status: 500 });
  }
}
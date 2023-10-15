import {NextResponse} from "next/server";
import  connectMongoDB  from "../../../lib/mongodb";
import Paciente from "../../../models/paciente";
import bcrypt from "bcryptjs";

export async function POST (req) {
    try {
        const {name,telefone,CPF, nascimento, email, doctorEmail } = await req.json();
        await connectMongoDB();
        await Paciente.create ({name,telefone,CPF, nascimento, email, doctorEmail})

      return NextResponse.json({
            message: "Usuário registrado"
        }, {status: 201}); 
    } catch (error) {
        return NextResponse.json({message: " Um erro ocorreu enquanto o usuário era registrado"},
       { status: 500});
    }
}
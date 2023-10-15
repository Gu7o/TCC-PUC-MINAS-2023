import mongoose, { Schema, models } from "mongoose"

const pacienteSchema = new Schema ({
    name: {
        type: String,
        required: true
    },
    telefone: {
        type: String,
        required: true
    },
    CPF: {
        type: String,
        required: true
    },
    nascimento: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    doctorEmail:{
        type: String,
        required: true
    },
}, {timestamps: true});

const Paciente = models.Paciente || mongoose.model("Paciente", pacienteSchema);
export default Paciente;
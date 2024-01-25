const nombre: string = "Joaquín"
const edad: number = 99
const esMayor: boolean = true

if (esMayor) {
    console.log(`Hola me llamo ${nombre} y tengo ${edad} años`)
} else {
    console.log("No eres mayor de edad")
}

interface User {
    name: string,
    lastname: string,
    email: string,
    password: string,
    address?: string
}

const user: User = {
    name: "Joaquín",
    lastname: "Guevara",
    email: "joajoal@gmail.com",
    password: "89578957895789578957895789",
    address: "mi casita"
}

const user2: User = {
    name: "Joaquín",
    lastname: "Guevara",
    email: "joajoal@gmail.com",
    password: "89578957895789578957895789",
    address: "de Surco"
}

const user3: User = {
    name: "Joaquín",
    lastname: "Guevara",
    email: "joajoal@gmail.com",
    password: "89578957895789578957895789",
}

const users: User[] = []

function insertUser(user: User) {
    users.push(user)
}

function getNameFromUser(user: User): string {
    return `${user.name} ${user.lastname}`
}

type Status = "created" | "on-hold" | "in-progress" | "done"

interface Task {
    title: string;
    date: Date;
    status: Status;
}

const task: Task = {
    title: "Decir algo",
    date: new Date(),
    status: "in-progress"
}
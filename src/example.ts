function greet(name: any, date: Date) {
    console.log(`Hello ${name}, today is ${date.toDateString()}`);
}

enum personMood {
    happy = 'feli',
    sad = 'truste',
    normal = ":v",
}

console.log(personMood.happy);

interface Estudiante {
    nombre: string;
    correo: string;
    notas: number[];
    autoEvaluacion?: number;
}

const cristian: Estudiante | null = {
    nombre: 'Cristo',
    correo: 'ebetrbtrbrt',
    notas:  [4, 5, 3]
}
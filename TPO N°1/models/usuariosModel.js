const db = require("../config/db")
// Obtener usuarios de tabla
exports.getUsers = async () => {
    const [rows,fields] = await db.execute("select * from usuarios");
    return rows
}

// Obtener usuario por ID
exports.getUserbyId = async (id) => {
    const [rows,fields] = await db.execute("select * from usuarios where id = ?",[id])
    return rows;
}

// Insertar usuario
exports.addUser = async (user) => {
    const [rows, fields] = await db.execute(`insert into usuarios(nombre, contraseña) values ("${user.nombre}","${user.contraseña}")`)
    return rows;
}

// Borrar usuario
exports.deleteUser = async (id) => {
    const [rows,fields] = await db.execute(`delete from usuarios where id = ${id}`);
    return rows;
}

// Editar usuario
exports.updateUser = async (user) => {
    const [rows,fields] = await db.execute(`update usuarios set nombre = "${user.nombre}", contraseña = "${user.contraseña}" where id = "${user.id}"`)
    return rows;
}
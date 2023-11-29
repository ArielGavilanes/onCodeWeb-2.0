// YYYYMMDDHHmmss-create-insert-usuario-function.ts
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query(`
        CREATE OR REPLACE FUNCTION insertUsuario (
	arg_usuario varchar(15),
	arg_contrasena varchar(15),
	arg_id_rol int,
	arg_id_estado int,
	arg_cedula varchar(10),
	arg_primer_nombre varchar(50),
	arg_segundo_nombre varchar(50),
	arg_primer_apellido varchar(50),
	arg_segundo_apellido varchar(50),
	arg_email varchar(50),
	arg_url_foto_perfil varchar(255) 
	DEFAULT 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40',
	arg_url_foto_portada varchar(255) 
	DEFAULT 'https://www.softzone.es/app/uploads/2018/04/guest.png?x=480&quality=40'
)
RETURNS VOID AS $$
DECLARE
	var_id_usuario int;
BEGIN
	
	IF arg_id_rol = 1 THEN
		INSERT INTO "Usuarios"(usuario, contrasena, id_rol, id_estado) 
		VALUES (arg_usuario, arg_contrasena, arg_id_rol, arg_id_estado)
		RETURNING id_usuario INTO var_id_usuario;
		
		INSERT INTO "Estudiantes"(cedula, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido,
								    email, url_foto_perfil, url_foto_portada, id_usuario)
		VALUES (arg_cedula, arg_primer_nombre, arg_segundo_nombre, arg_primer_apellido, 
			    arg_segundo_apellido, arg_email, arg_url_foto_perfil, arg_url_foto_portada, var_id_usuario);
	ELSIF arg_id_rol = 2 THEN 
		INSERT INTO "Usuarios"(usuario, contrasena, id_rol, id_estado) 
		VALUES (arg_usuario, arg_contrasena, arg_id_rol, arg_id_estado)
		RETURNING id_usuario INTO var_id_usuario;
		
		INSERT INTO "Creadores"(cedula, primer_nombre, segundo_nombre, primer_apellido, segundo_apellido,
								    email, url_foto_perfil, url_foto_portada, id_usuario)
		VALUES (arg_cedula, arg_primer_nombre, arg_segundo_nombre, arg_primer_apellido, 
			    arg_segundo_apellido, arg_email, arg_url_foto_perfil, arg_url_foto_portada, var_id_usuario);
	END IF;
	END; 
	
	$$ LANGUAGE plpgsql

        `);
    },

    down: async (queryInterface, Sequelize) => {
        await queryInterface.sequelize.query('DROP FUNCTION IF EXISTS insert_usuario');
    }
};

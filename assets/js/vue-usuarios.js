var vueUsuarios= new Vue({
    el: "#AdminUsuarios",
    data:{
        textoBusqueda:"",
        usuarioSelected: 0,
        usuarios:[   
 {
    "idUsuario": 1,
    "nombre": "Nacho",
    "apellido": "Hola",
    "sexo":"m",
    "rol":1,
    "fechaNac":"2008/11/28",
    "dui":00000001,
    "password":12345,
  },
                        {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },
                        {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },            {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },            {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },
                        {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },
                        {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },            {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },            {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },
            {
    "idUsuario": 2,
    "nombre": "Nacha",
    "apellido": "Hola",
    "sexo":"f",
    "rol":0,
    "fechaNac":"2008/11/29",
    "dui":00000002,
    "password":12345,
  },
            {
    "idUsuario": 3,
    "nombre": "Prueba",
    "apellido": "Hol",
    "sexo":"f",
    "rol":0,
    "fechaNac":"29/11/2009",
    "dui":00000003,
    "password":12345,
  },
            {
    "idUsuario": 4,
    "nombre": "Nose",
    "apellido": "Hla",
    "sexo":"m",
    "rol":0,
    "fechaNac":"2002/11/29",
    "dui":00000004,
    "password":12345,
  },
        ],
    },
    methods:{
        //METODO PARA BUSCAR USUARIOS DENTRO DE LA TABLA 
        buscar:function(x){
            
            if(this.textoBusqueda=="")
                return true;
                    
            var cad=this.usuarios[x].nombre + 
                this.usuarios[x].apellido +
                this.usuarios[x].dui;
            cad=cad.toUpperCase();
            
            if(cad.indexOf(this.textoBusqueda.toUpperCase())>=0)
                        return true;
            else
                return false;  
        },
        
        //METODO PARA MOSTRAR EL MODAL AGREGAR
        mostrarAgregar:function(){
            $('#modalAgregar').modal('show');
        },
        //METODO PARA MOSTRAR EL MODAL MODIFICAR
        mostrarModificar:function(){
            $('#modalModificar').modal('show');
        },
        //METODO PARA MOSTRAR EL MODAL ELIMINAR
        mostrarEliminar:function(){
            $('#modalEliminar').modal('show');
        },
        
        
    },
});
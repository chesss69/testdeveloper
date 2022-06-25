export const options = {
    definition:{
        openapi: "3.0.0",
        info: {
            title: "API de Personas",
            version: "1.0.0",
            description: "API de Personas",
            contact: { 
                name: "Fabio Alfonso",
                email: "alfonsofabiocesar@gmail.com",
            }
        },
        servers:[
            {
                url: "http://localhost:3000",
            }
        ],
    },
    apis:[
        "./src/routes/*.ts",
    ]
}
const Hapi = require("@hapi/hapi");
const routes = require("./router");

const Init = async () => {
	const server = Hapi.server({
		port: 3000,
		host: "localhost",
		routes: {
			cors: {
				origin: ["*"],
			},
		},
	});

	server.route(routes);

	await server.start();
	console.log("Server running on %s", server.info.uri);
};

Init();

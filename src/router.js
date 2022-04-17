const {
	addBook,
	AllBooks,
	BookById,
	editBookById,
	deleteBookById,
} = require("./handler");

const routes = [
	{
		method: "POST",
		path: "/books",
		handler: addBook,
	},
	{
		method: "GET",
		path: "/books",
		handler: AllBooks,
	},
	{
		method: "GET",
		path: "/books/{id}",
		handler: BookById,
	},
	{
		method: "PUT",
		path: "/books/{id}",
		handler: editBookById,
	},
	{
		method: "DELETE",
		path: "/books/{id}",
		handler: deleteBookById,
	},
];

module.exports = routes;

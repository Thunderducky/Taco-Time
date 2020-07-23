module.exports = function (props) {
	return `
	${tacos.map(taco => {
		return `
		<li class="list-group-item">${taco.taco_name}</li>
		<center><button data-devour="${taco.id}" class="btn devour-it" type="submit">Down the Hatch!</button></center>
		`
	}).join("\n")}
`
}
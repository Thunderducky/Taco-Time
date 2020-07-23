module.exports = function (props) {
	return `
		<li class="list-group-item">${props.taco_name}</li>
		<center><button data-devour="${props.id}" class="btn devour-it" type="submit">Down the Hatch!</button></center>
	}).join("\n")}
`
}
//next make a on click function to handle what happens whrn the devour it button is clicked


//for when there are multiple tacos
// return `
// ${tacos.map(taco => {
// 	return `
// 	<li class="list-group-item">${props.taco_name}</li>
// 	<center><button data-devour="${props.id}" class="btn devour-it" type="submit">Down the Hatch!</button></center>
// 	`
// }).join("\n")}
// `

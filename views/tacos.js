module.exports = function (props) {
    return `
    <h1>My Tacos</h1>

	<h3>Here lies the top of the taco heap!</h3>
	
	<ul>
	${
        props.tacos.map(taco => {
            return `
			<li>
				<p>ID: ${taco.id}</p>
				<p>Task: ${taco.task}</p>
			</li>
			`
        }).join("")
        }
	</ul>
	    `
}
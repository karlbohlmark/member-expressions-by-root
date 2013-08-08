var astw = require('astw')

module.exports = memberExpressionsByRoot

function memberExpressionsByRoot (ast, rootIdentifier) {
	var walk = astw(ast)
	var expressions = []
	walk(function (node) {
		if (node.type == 'MemberExpression' &&
			(!node.parent || node.parent.type != 'MemberExpression') &&
			node.object.type == 'Identifier' && node.object.name == rootIdentifier) {
			expressions.push(node)
		}
	})

	return expressions
}


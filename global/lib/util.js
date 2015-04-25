// General global functions to be used everywhere go here.
var Util = {}

Util.if = function(condition, thenClause, elseClause) {
	return condition ? thenClause() : (elseClause || function() {})()
}


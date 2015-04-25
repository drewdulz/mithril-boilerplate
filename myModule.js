// myModule.js
var myModule = {}

myModule.vm = function() {
	var vm = {};

	// States
	vm.loading = m.prop(false);

	// Data
	vm.myData = m.prop([]);

	///////////////
	// Functions //
	///////////////

	vm.init = function() {

	}

	vm.routeToOtherPage = function() {
		m.route("/someModule");
	}

	return vm;
}()


myModule.controller = function() {
	myModule.vm.init();
};

myModule.view = function(ctrl) {
	var vm = myModule.vm;
	return m('div', [
		m('h1', 'Hello World! This is the homePage'),
		m('h2.someClass', {onclick: vm.routeToOtherPage.bind()},'click here to route to another page.')
	]);
};





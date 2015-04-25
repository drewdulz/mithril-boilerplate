// someModule.js
var someModule = {}

someModule.vm = function() {
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
		m.route("/");
	}

	return vm;
}()


someModule.controller = function() {
	myModule.vm.init();
};

someModule.view = function(ctrl) {
	var vm = someModule.vm;
	return m('div', [
		m('h1', 'This is the other page'),
		m('h2.someClass', {onclick: vm.routeToOtherPage.bind()},'click here to route back to main page.')
	]);
};




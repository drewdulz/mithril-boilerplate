// patients.js
var patients = {}
//var patientDataFirebase = new Firebase('https://dentalcenter.firebaseio.com');

var patientDataFirebase = new Firebase('https://dentalcenter.firebaseio.com/patients');


patients.vm = function() {
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

	vm.addPatient = function() {
		//alert("test");
		var newPatientFirebase = new Firebase('https://dentalcenter.firebaseio.com/patients');

		newPatientFirebase.push({
			firstName: "Randall",
			lastName: "Warkentin",
			address1: "9 Oakwood Drive",
			address2: null,
			postalCode: "R6M 2A9",
			allergies: "None",		
		});
	}

	return vm;
}()



patients.controller = function() {
	patients.vm.init();
};

patients.view = function(ctrl) {
	var vm = patients.vm;
	return m('div', [
		m('h1', 'Hello World! This is the homePage'),
		m('h2.someClass', {onclick: vm.routeToOtherPage.bind()},'click here to route to another page.'),
		m('button', {onclick: vm.addPatient}, 'add patient' )
	]);
};





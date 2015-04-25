var UserSetting = {};
UserSetting.url = 'http://someServerURL.com/';

UserSetting.get = function(data) {
	m.request({method: "GET", url: UserSetting.url, data: data})
}
UserSetting.edit = function(data) {
	m.request({method: "PATCH", url: UserSetting.url, data: data})
}
UserSetting.create = function(data) {
	m.request({method: "POST", url: UserSetting.url, data: data})
}
UserSetting.remove = function (data) {
	m.request({method: "DELETE", url: UserSetting.url, data: data})
}
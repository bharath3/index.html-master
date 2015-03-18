/*
 * Service settings
 */
var insert_settings = {
    "database_url": "https://api.appery.io/rest/1/db",
    "database_id": "550836ebe4b00b4d7e30be4c"
}

/*
 * Services
 */

var insert_login_service = new Apperyio.RestService({
    'url': '{database_url}/login',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': insert_settings
});

var insert_userdetails_read_service = new Apperyio.RestService({
    'url': '{database_url}/collections/userdetails/{_id}',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': insert_settings
});

var insert_logout_service = new Apperyio.RestService({
    'url': '{database_url}/logout',
    'dataType': 'json',
    'type': 'get',

    'serviceSettings': insert_settings
});
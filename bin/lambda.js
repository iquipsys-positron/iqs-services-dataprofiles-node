let DataProfilesLambdaFunction = require('../obj/src/container/DataProfilesLambdaFunction').DataProfilesLambdaFunction;

module.exports = new DataProfilesLambdaFunction().getHandler();
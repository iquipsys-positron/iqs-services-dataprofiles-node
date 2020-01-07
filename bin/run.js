let DataProfilesProcess = require('../obj/src/container/DataProfilesProcess').DataProfilesProcess;

try {
    new DataProfilesProcess().run(process.argv);
} catch (ex) {
    console.error(ex);
}

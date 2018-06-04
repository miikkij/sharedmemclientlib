const config = require("./.config");

import test from 'ava';

// Configuration for SharedMem API class
import SharedAPI from "../src/modules/sharedmem-api.js";

let baseURL = config.BASE_URL_LOGIN; 

console.log("E2E: Create Shared ID");
console.log(config);

test.before(async t => {
});

test.after.always('cleanup', t => {
});

test('E2E: Should make SUCCESSFUL async create shared id call to backend', async t => {
  const sharedMemAPI = new SharedMemAPI();
  sharedMemAPI.initService(baseURL);
  const response = await sharedMemAPI.createSharedID();
  t.is(response.status, 200);
});

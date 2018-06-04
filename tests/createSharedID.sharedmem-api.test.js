import test from 'ava';
import createServer from './_server';
import getFreePort from './_getFreePort';
import SharedMemAPI from "../src/modules/sharedmem-api.js";

let baseURL = "https://something.somewhere/api/v1/";

let port;
let server = null;
const MOCK = {
    "sharedid": "123abc"
};

test.before(async t => {
    port = await getFreePort();
    server = createServer(port, MOCK);
});

test.after.always('cleanup', t => {
    server.close();
});

test('Should make SUCCESSFUL async create shared id call to backend', async t => {
    const sharedMemAPI = new SharedMemAPI();
    sharedMemAPI.initService(`http://localhost:${port}`);
    const response = await sharedMemAPI.createSharedID();
    t.is(response.status, 200);
    t.deepEqual(response.data, MOCK);
});
"use strict";

import SharedMemAPI from "../modules/sharedmem-api";

class SharedMemService {
  constructor() {}

  /**
   * SharedMemService initializer with base url and token
   * @param {string} baseURL
   */
  initialize(baseURL, token) {
    this._sharedMemToken = token;
    this._sharedMemAPI = new SharedMemAPI();
    this._sharedMemAPI.initService(baseURL, token);
    this._cbMapOnNewSharedID = {};
    this._cbMapOnFailedNewSharedID = {};
  }

  async createNewToken(sharedID) {
    try {
      await this._sharedMemAPI.createNewToken(sharedID);
    }
    catch (e) {
      _failedNewSharedId(1001, "FAILED_TO_CREATE_NEW_SHARED_ID", e);
    }
  }

  set OnNewSharedID(sharedID)
  {

  }

  _failedNewSharedId(errorCode, errorString, exception) {
    for (var key in this._cbMapOnFailedNewSharedID) {
      this._cbMapOnFailedNewSharedID[key](errorCode, errorString, reason);
    }
  } 

  set OnFailedNewSharedID(callback) {
      this._cbMapOnFailedNewSharedID[callback] = callback;
  }

  async setData(emailAddress, password) {
    return await this._sharedMemAPI.login(emailAddress, password);
  }

  async loginCB(emailaddress, password, callback) {
    callback(await this._sharedMemAPI.login(emailAddress, password));
  }
}
export default new ViestiService();
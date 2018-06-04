import * as Validator from '../lib/validator';
import config from '../_config.js';
import {
  create
} from 'apisauce';
import {
  isBrowser,
  isNode
} from 'browser-or-node';

'use strict';

export default class SharedMemAPI {
  constructor() {}

  initService(baseURL) {
    this._baseURL = baseURL;
    this._apisauce = create({
      baseURL: this._baseURL,
    });
    const version = this._apisauce.get('/sharedmem/ver');
    console.log('SharedMemAPI-Backend[' + version + ']-ClientLib[' + config['VERSION'] + ']');
  }

  /**
   * Is service initialized?
   * 
   * @returns {boolean} isInitialized
   * @memberof SharedMemAPI
   */
  _isServiceInitialized() {
    if (!this._apisauce) {
      throw new Error('BAD_APISAUCE_NOT_INITIALIZED', 'SharedMemAPI: class not initialized');
    }
    return true;
  }

  /**
   * Set Data to some location at Shared Memory Backend
   * 
   * @param {any} location 
   * @param {any} data 
   * @returns 
   * @memberof SharedMemAPI
   */
  async setData(location, data) {
    this._isServiceInitialized();
    return this._apisauce.post('/sharedmem/' + location, data, {}); // TODO: later on some sort of access control token to headers automatically after authentication
  }

  /**
   * Get data from some location at Shared Memory Backend
   * 
   * @param {any} location 
   * @param {any} data 
   * @returns 
   * @memberof SharedMemAPI
   */
  async getData(location, data) {
    this._isServiceInitialized();
    return await this._apisauce.get('/sharedmem/' + location, {}); // TODO: later on some sort of access control token to headers automatically after authentication
  }

  async createSharedID() {
    this._isServiceInitialized();
    return await this._apisauce.post('/sharedmem/id/', {}, {});
  }

  /**
   * Base URL
   * @type {string}
   */
  get baseURL() {
    return this._baseURL;
  }

  set baseURL(baseURLversion) {
    if (Validator.isEmpty(baseURL)) {
      throw new Error('BAD_SHAREDMEM_BASE_URL', 'Undefined or empty BaseURL for SharedMemService');
      this._baseURL = "BAD_SHAREDMEM_BASE_URL";
    } else {
      this._baseURL = baseURL;
    }
    this._baseURL = baseURL;
  }
}
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoeFactory = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const JoeFactory_json_1 = __importDefault(require("./JoeFactory.json"));
class JoeFactory extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, JoeFactory_json_1.default.abi, JoeFactory_json_1.default.bytecode);
        this.assign();
    }
    deploy(feeToSetter, options) {
        return this.__deploy([feeToSetter], options);
    }
    parsePairCreatedEvent(receipt) {
        return this.parseEvents(receipt, "PairCreated").map(e => this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event) {
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            param4: new eth_contract_1.BigNumber(result[3]),
            _event: event
        };
    }
    assign() {
        let allPairs_call = async (param1, options) => {
            let result = await this.call('allPairs', [this.wallet.utils.toString(param1)], options);
            return result;
        };
        this.allPairs = allPairs_call;
        let allPairsLength_call = async (options) => {
            let result = await this.call('allPairsLength', [], options);
            return new eth_contract_1.BigNumber(result);
        };
        this.allPairsLength = allPairsLength_call;
        let feeTo_call = async (options) => {
            let result = await this.call('feeTo', [], options);
            return result;
        };
        this.feeTo = feeTo_call;
        let feeToSetter_call = async (options) => {
            let result = await this.call('feeToSetter', [], options);
            return result;
        };
        this.feeToSetter = feeToSetter_call;
        let getPairParams = (params) => [params.param1, params.param2];
        let getPair_call = async (params, options) => {
            let result = await this.call('getPair', getPairParams(params), options);
            return result;
        };
        this.getPair = getPair_call;
        let migrator_call = async (options) => {
            let result = await this.call('migrator', [], options);
            return result;
        };
        this.migrator = migrator_call;
        let pairCodeHash_call = async (options) => {
            let result = await this.call('pairCodeHash', [], options);
            return result;
        };
        this.pairCodeHash = pairCodeHash_call;
        let createPairParams = (params) => [params.tokenA, params.tokenB];
        let createPair_send = async (params, options) => {
            let result = await this.send('createPair', createPairParams(params), options);
            return result;
        };
        let createPair_call = async (params, options) => {
            let result = await this.call('createPair', createPairParams(params), options);
            return result;
        };
        this.createPair = Object.assign(createPair_send, {
            call: createPair_call
        });
        let setFeeTo_send = async (feeTo, options) => {
            let result = await this.send('setFeeTo', [feeTo], options);
            return result;
        };
        let setFeeTo_call = async (feeTo, options) => {
            let result = await this.call('setFeeTo', [feeTo], options);
            return;
        };
        this.setFeeTo = Object.assign(setFeeTo_send, {
            call: setFeeTo_call
        });
        let setFeeToSetter_send = async (feeToSetter, options) => {
            let result = await this.send('setFeeToSetter', [feeToSetter], options);
            return result;
        };
        let setFeeToSetter_call = async (feeToSetter, options) => {
            let result = await this.call('setFeeToSetter', [feeToSetter], options);
            return;
        };
        this.setFeeToSetter = Object.assign(setFeeToSetter_send, {
            call: setFeeToSetter_call
        });
        let setMigrator_send = async (migrator, options) => {
            let result = await this.send('setMigrator', [migrator], options);
            return result;
        };
        let setMigrator_call = async (migrator, options) => {
            let result = await this.call('setMigrator', [migrator], options);
            return;
        };
        this.setMigrator = Object.assign(setMigrator_send, {
            call: setMigrator_call
        });
    }
}
exports.JoeFactory = JoeFactory;
JoeFactory._abi = JoeFactory_json_1.default.abi;

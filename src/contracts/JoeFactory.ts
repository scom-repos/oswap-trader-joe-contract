import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./JoeFactory.json";
export interface ICreatePairParams {tokenA:string;tokenB:string}
export interface IGetPairParams {param1:string;param2:string}
export class JoeFactory extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(feeToSetter:string, options?: TransactionOptions): Promise<string>{
        return this.__deploy([feeToSetter], options);
    }
    parsePairCreatedEvent(receipt: TransactionReceipt): JoeFactory.PairCreatedEvent[]{
        return this.parseEvents(receipt, "PairCreated").map(e=>this.decodePairCreatedEvent(e));
    }
    decodePairCreatedEvent(event: Event): JoeFactory.PairCreatedEvent{
        let result = event.data;
        return {
            token0: result.token0,
            token1: result.token1,
            pair: result.pair,
            param4: new BigNumber(result[3]),
            _event: event
        };
    }
    allPairs: {
        (param1:number|BigNumber, options?: TransactionOptions): Promise<string>;
    }
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    }
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        txData: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
    }
    feeTo: {
        (options?: TransactionOptions): Promise<string>;
    }
    feeToSetter: {
        (options?: TransactionOptions): Promise<string>;
    }
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    }
    migrator: {
        (options?: TransactionOptions): Promise<string>;
    }
    pairCodeHash: {
        (options?: TransactionOptions): Promise<string>;
    }
    setFeeTo: {
        (feeTo:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (feeTo:string, options?: TransactionOptions) => Promise<void>;
        txData: (feeTo:string, options?: TransactionOptions) => Promise<string>;
    }
    setFeeToSetter: {
        (feeToSetter:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (feeToSetter:string, options?: TransactionOptions) => Promise<void>;
        txData: (feeToSetter:string, options?: TransactionOptions) => Promise<string>;
    }
    setMigrator: {
        (migrator:string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (migrator:string, options?: TransactionOptions) => Promise<void>;
        txData: (migrator:string, options?: TransactionOptions) => Promise<string>;
    }
    private assign(){
        let allPairs_call = async (param1:number|BigNumber, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('allPairs',[this.wallet.utils.toString(param1)],options);
            return result;
        }
        this.allPairs = allPairs_call
        let allPairsLength_call = async (options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('allPairsLength',[],options);
            return new BigNumber(result);
        }
        this.allPairsLength = allPairsLength_call
        let feeTo_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('feeTo',[],options);
            return result;
        }
        this.feeTo = feeTo_call
        let feeToSetter_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('feeToSetter',[],options);
            return result;
        }
        this.feeToSetter = feeToSetter_call
        let getPairParams = (params: IGetPairParams) => [params.param1,params.param2];
        let getPair_call = async (params: IGetPairParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('getPair',getPairParams(params),options);
            return result;
        }
        this.getPair = getPair_call
        let migrator_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('migrator',[],options);
            return result;
        }
        this.migrator = migrator_call
        let pairCodeHash_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('pairCodeHash',[],options);
            return result;
        }
        this.pairCodeHash = pairCodeHash_call
        let createPairParams = (params: ICreatePairParams) => [params.tokenA,params.tokenB];
        let createPair_send = async (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('createPair',createPairParams(params),options);
            return result;
        }
        let createPair_call = async (params: ICreatePairParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.call('createPair',createPairParams(params),options);
            return result;
        }
        let createPair_txData = async (params: ICreatePairParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('createPair',createPairParams(params),options);
            return result;
        }
        this.createPair = Object.assign(createPair_send, {
            call:createPair_call
            , txData:createPair_txData
        });
        let setFeeTo_send = async (feeTo:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setFeeTo',[feeTo],options);
            return result;
        }
        let setFeeTo_call = async (feeTo:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setFeeTo',[feeTo],options);
            return;
        }
        let setFeeTo_txData = async (feeTo:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('setFeeTo',[feeTo],options);
            return result;
        }
        this.setFeeTo = Object.assign(setFeeTo_send, {
            call:setFeeTo_call
            , txData:setFeeTo_txData
        });
        let setFeeToSetter_send = async (feeToSetter:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setFeeToSetter',[feeToSetter],options);
            return result;
        }
        let setFeeToSetter_call = async (feeToSetter:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setFeeToSetter',[feeToSetter],options);
            return;
        }
        let setFeeToSetter_txData = async (feeToSetter:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('setFeeToSetter',[feeToSetter],options);
            return result;
        }
        this.setFeeToSetter = Object.assign(setFeeToSetter_send, {
            call:setFeeToSetter_call
            , txData:setFeeToSetter_txData
        });
        let setMigrator_send = async (migrator:string, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('setMigrator',[migrator],options);
            return result;
        }
        let setMigrator_call = async (migrator:string, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('setMigrator',[migrator],options);
            return;
        }
        let setMigrator_txData = async (migrator:string, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('setMigrator',[migrator],options);
            return result;
        }
        this.setMigrator = Object.assign(setMigrator_send, {
            call:setMigrator_call
            , txData:setMigrator_txData
        });
    }
}
export module JoeFactory{
    export interface PairCreatedEvent {token0:string,token1:string,pair:string,param4:BigNumber,_event:Event}
}
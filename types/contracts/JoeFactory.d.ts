import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface ICreatePairParams {
    tokenA: string;
    tokenB: string;
}
export interface IGetPairParams {
    param1: string;
    param2: string;
}
export declare class JoeFactory extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(feeToSetter: string, options?: TransactionOptions): Promise<string>;
    parsePairCreatedEvent(receipt: TransactionReceipt): JoeFactory.PairCreatedEvent[];
    decodePairCreatedEvent(event: Event): JoeFactory.PairCreatedEvent;
    allPairs: {
        (param1: number | BigNumber, options?: TransactionOptions): Promise<string>;
    };
    allPairsLength: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    createPair: {
        (params: ICreatePairParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
        txData: (params: ICreatePairParams, options?: TransactionOptions) => Promise<string>;
    };
    feeTo: {
        (options?: TransactionOptions): Promise<string>;
    };
    feeToSetter: {
        (options?: TransactionOptions): Promise<string>;
    };
    getPair: {
        (params: IGetPairParams, options?: TransactionOptions): Promise<string>;
    };
    migrator: {
        (options?: TransactionOptions): Promise<string>;
    };
    pairCodeHash: {
        (options?: TransactionOptions): Promise<string>;
    };
    setFeeTo: {
        (feeTo: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (feeTo: string, options?: TransactionOptions) => Promise<void>;
        txData: (feeTo: string, options?: TransactionOptions) => Promise<string>;
    };
    setFeeToSetter: {
        (feeToSetter: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (feeToSetter: string, options?: TransactionOptions) => Promise<void>;
        txData: (feeToSetter: string, options?: TransactionOptions) => Promise<string>;
    };
    setMigrator: {
        (migrator: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (migrator: string, options?: TransactionOptions) => Promise<void>;
        txData: (migrator: string, options?: TransactionOptions) => Promise<string>;
    };
    private assign;
}
export declare module JoeFactory {
    interface PairCreatedEvent {
        token0: string;
        token1: string;
        pair: string;
        param4: BigNumber;
        _event: Event;
    }
}

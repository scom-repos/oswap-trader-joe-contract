import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
export interface IAllowanceParams {
    param1: string;
    param2: string;
}
export interface IApproveParams {
    spender: string;
    value: number | BigNumber;
}
export interface IInitializeParams {
    token0: string;
    token1: string;
}
export interface IPermitParams {
    owner: string;
    spender: string;
    value: number | BigNumber;
    deadline: number | BigNumber;
    v: number | BigNumber;
    r: string;
    s: string;
}
export interface ISwapParams {
    amount0Out: number | BigNumber;
    amount1Out: number | BigNumber;
    to: string;
    data: string;
}
export interface ITransferParams {
    to: string;
    value: number | BigNumber;
}
export interface ITransferFromParams {
    from: string;
    to: string;
    value: number | BigNumber;
}
export declare class JoePair extends _Contract {
    static _abi: any;
    constructor(wallet: IWallet, address?: string);
    deploy(options?: TransactionOptions): Promise<string>;
    parseApprovalEvent(receipt: TransactionReceipt): JoePair.ApprovalEvent[];
    decodeApprovalEvent(event: Event): JoePair.ApprovalEvent;
    parseBurnEvent(receipt: TransactionReceipt): JoePair.BurnEvent[];
    decodeBurnEvent(event: Event): JoePair.BurnEvent;
    parseMintEvent(receipt: TransactionReceipt): JoePair.MintEvent[];
    decodeMintEvent(event: Event): JoePair.MintEvent;
    parseSwapEvent(receipt: TransactionReceipt): JoePair.SwapEvent[];
    decodeSwapEvent(event: Event): JoePair.SwapEvent;
    parseSyncEvent(receipt: TransactionReceipt): JoePair.SyncEvent[];
    decodeSyncEvent(event: Event): JoePair.SyncEvent;
    parseTransferEvent(receipt: TransactionReceipt): JoePair.TransferEvent[];
    decodeTransferEvent(event: Event): JoePair.TransferEvent;
    DOMAIN_SEPARATOR: {
        (options?: TransactionOptions): Promise<string>;
    };
    MINIMUM_LIQUIDITY: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    PERMIT_TYPEHASH: {
        (options?: TransactionOptions): Promise<string>;
    };
    allowance: {
        (params: IAllowanceParams, options?: TransactionOptions): Promise<BigNumber>;
    };
    approve: {
        (params: IApproveParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IApproveParams, options?: TransactionOptions) => Promise<boolean>;
    };
    balanceOf: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    burn: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<{
            amount0: BigNumber;
            amount1: BigNumber;
        }>;
    };
    decimals: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    factory: {
        (options?: TransactionOptions): Promise<string>;
    };
    getReserves: {
        (options?: TransactionOptions): Promise<{
            _reserve0: BigNumber;
            _reserve1: BigNumber;
            _blockTimestampLast: BigNumber;
        }>;
    };
    initialize: {
        (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
    };
    kLast: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    mint: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<BigNumber>;
    };
    name: {
        (options?: TransactionOptions): Promise<string>;
    };
    nonces: {
        (param1: string, options?: TransactionOptions): Promise<BigNumber>;
    };
    permit: {
        (params: IPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IPermitParams, options?: TransactionOptions) => Promise<void>;
    };
    price0CumulativeLast: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    price1CumulativeLast: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    skim: {
        (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (to: string, options?: TransactionOptions) => Promise<void>;
    };
    swap: {
        (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
    };
    symbol: {
        (options?: TransactionOptions): Promise<string>;
    };
    sync: {
        (options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (options?: TransactionOptions) => Promise<void>;
    };
    token0: {
        (options?: TransactionOptions): Promise<string>;
    };
    token1: {
        (options?: TransactionOptions): Promise<string>;
    };
    totalSupply: {
        (options?: TransactionOptions): Promise<BigNumber>;
    };
    transfer: {
        (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
    };
    transferFrom: {
        (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
    };
    private assign;
}
export declare module JoePair {
    interface ApprovalEvent {
        owner: string;
        spender: string;
        value: BigNumber;
        _event: Event;
    }
    interface BurnEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        to: string;
        _event: Event;
    }
    interface MintEvent {
        sender: string;
        amount0: BigNumber;
        amount1: BigNumber;
        _event: Event;
    }
    interface SwapEvent {
        sender: string;
        amount0In: BigNumber;
        amount1In: BigNumber;
        amount0Out: BigNumber;
        amount1Out: BigNumber;
        to: string;
        _event: Event;
    }
    interface SyncEvent {
        reserve0: BigNumber;
        reserve1: BigNumber;
        _event: Event;
    }
    interface TransferEvent {
        from: string;
        to: string;
        value: BigNumber;
        _event: Event;
    }
}

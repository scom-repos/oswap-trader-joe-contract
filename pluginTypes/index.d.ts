/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/JoeERC20.json.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/JoeERC20.json.ts" {
    const _default: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default;
}
/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/JoeERC20.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/JoeERC20.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface IAllowanceParams {
        param1: string;
        param2: string;
    }
    export interface IApproveParams {
        spender: string;
        value: number | BigNumber;
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
    export interface ITransferParams {
        to: string;
        value: number | BigNumber;
    }
    export interface ITransferFromParams {
        from: string;
        to: string;
        value: number | BigNumber;
    }
    export class JoeERC20 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(options?: TransactionOptions): Promise<string>;
        parseApprovalEvent(receipt: TransactionReceipt): JoeERC20.ApprovalEvent[];
        decodeApprovalEvent(event: Event): JoeERC20.ApprovalEvent;
        parseTransferEvent(receipt: TransactionReceipt): JoeERC20.TransferEvent[];
        decodeTransferEvent(event: Event): JoeERC20.TransferEvent;
        DOMAIN_SEPARATOR: {
            (options?: TransactionOptions): Promise<string>;
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
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
        };
        balanceOf: {
            (param1: string, options?: TransactionOptions): Promise<BigNumber>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
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
            txData: (params: IPermitParams, options?: TransactionOptions) => Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        totalSupply: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        transfer: {
            (params: ITransferParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module JoeERC20 {
        interface ApprovalEvent {
            owner: string;
            spender: string;
            value: BigNumber;
            _event: Event;
        }
        interface TransferEvent {
            from: string;
            to: string;
            value: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/JoeFactory.json.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/JoeFactory.json.ts" {
    const _default_1: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_1;
}
/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/JoeFactory.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/JoeFactory.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, Event, TransactionOptions } from "@ijstech/eth-contract";
    export interface ICreatePairParams {
        tokenA: string;
        tokenB: string;
    }
    export interface IGetPairParams {
        param1: string;
        param2: string;
    }
    export class JoeFactory extends _Contract {
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
    export module JoeFactory {
        interface PairCreatedEvent {
            token0: string;
            token1: string;
            pair: string;
            param4: BigNumber;
            _event: Event;
        }
    }
}
/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/JoePair.json.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/JoePair.json.ts" {
    const _default_2: {
        abi: ({
            inputs: any[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
            name?: undefined;
            outputs?: undefined;
        } | {
            anonymous: boolean;
            inputs: {
                indexed: boolean;
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            type: string;
            stateMutability?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            anonymous?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_2;
}
/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/JoePair.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/JoePair.ts" {
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
    export class JoePair extends _Contract {
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
            txData: (params: IApproveParams, options?: TransactionOptions) => Promise<string>;
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
            txData: (to: string, options?: TransactionOptions) => Promise<string>;
        };
        decimals: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getReserves: {
            (options?: TransactionOptions): Promise<{
                reserve0: BigNumber;
                reserve1: BigNumber;
                blockTimestampLast: BigNumber;
            }>;
        };
        initialize: {
            (params: IInitializeParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IInitializeParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: IInitializeParams, options?: TransactionOptions) => Promise<string>;
        };
        kLast: {
            (options?: TransactionOptions): Promise<BigNumber>;
        };
        mint: {
            (to: string, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (to: string, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (to: string, options?: TransactionOptions) => Promise<string>;
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
            txData: (params: IPermitParams, options?: TransactionOptions) => Promise<string>;
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
            txData: (to: string, options?: TransactionOptions) => Promise<string>;
        };
        swap: {
            (params: ISwapParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapParams, options?: TransactionOptions) => Promise<string>;
        };
        symbol: {
            (options?: TransactionOptions): Promise<string>;
        };
        sync: {
            (options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (options?: TransactionOptions) => Promise<void>;
            txData: (options?: TransactionOptions) => Promise<string>;
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
            txData: (params: ITransferParams, options?: TransactionOptions) => Promise<string>;
        };
        transferFrom: {
            (params: ITransferFromParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ITransferFromParams, options?: TransactionOptions) => Promise<boolean>;
            txData: (params: ITransferFromParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
    export module JoePair {
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
}
/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/JoeRouter02.json.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/JoeRouter02.json.ts" {
    const _default_3: {
        abi: ({
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
            name?: undefined;
            outputs?: undefined;
        } | {
            inputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            name: string;
            outputs: {
                internalType: string;
                name: string;
                type: string;
            }[];
            stateMutability: string;
            type: string;
        } | {
            stateMutability: string;
            type: string;
            inputs?: undefined;
            name?: undefined;
            outputs?: undefined;
        })[];
        bytecode: string;
    };
    export default _default_3;
}
/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/JoeRouter02.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/JoeRouter02.ts" {
    import { IWallet, Contract as _Contract, TransactionReceipt, BigNumber, TransactionOptions } from "@ijstech/eth-contract";
    export interface IDeployParams {
        factory: string;
        WAVAX: string;
    }
    export interface IAddLiquidityParams {
        tokenA: string;
        tokenB: string;
        amountADesired: number | BigNumber;
        amountBDesired: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IAddLiquidityAVAXParams {
        token: string;
        amountTokenDesired: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountAVAXMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IGetAmountInParams {
        amountOut: number | BigNumber;
        reserveIn: number | BigNumber;
        reserveOut: number | BigNumber;
    }
    export interface IGetAmountOutParams {
        amountIn: number | BigNumber;
        reserveIn: number | BigNumber;
        reserveOut: number | BigNumber;
    }
    export interface IGetAmountsInParams {
        amountOut: number | BigNumber;
        path: string[];
    }
    export interface IGetAmountsOutParams {
        amountIn: number | BigNumber;
        path: string[];
    }
    export interface IQuoteParams {
        amountA: number | BigNumber;
        reserveA: number | BigNumber;
        reserveB: number | BigNumber;
    }
    export interface IRemoveLiquidityParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityAVAXParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountAVAXMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountAVAXMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
    }
    export interface IRemoveLiquidityAVAXWithPermitParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountAVAXMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams {
        token: string;
        liquidity: number | BigNumber;
        amountTokenMin: number | BigNumber;
        amountAVAXMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface IRemoveLiquidityWithPermitParams {
        tokenA: string;
        tokenB: string;
        liquidity: number | BigNumber;
        amountAMin: number | BigNumber;
        amountBMin: number | BigNumber;
        to: string;
        deadline: number | BigNumber;
        approveMax: boolean;
        v: number | BigNumber;
        r: string;
        s: string;
    }
    export interface ISwapAVAXForExactTokensParams {
        amountOut: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactAVAXForTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams {
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForAVAXParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {
        amountIn: number | BigNumber;
        amountOutMin: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactAVAXParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export interface ISwapTokensForExactTokensParams {
        amountOut: number | BigNumber;
        amountInMax: number | BigNumber;
        path: string[];
        to: string;
        deadline: number | BigNumber;
    }
    export class JoeRouter02 extends _Contract {
        static _abi: any;
        constructor(wallet: IWallet, address?: string);
        deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>;
        WAVAX: {
            (options?: TransactionOptions): Promise<string>;
        };
        addLiquidity: {
            (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
                liquidity: BigNumber;
            }>;
            txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        addLiquidityAVAX: {
            (params: IAddLiquidityAVAXParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IAddLiquidityAVAXParams, options?: number | BigNumber | TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountAVAX: BigNumber;
                liquidity: BigNumber;
            }>;
            txData: (params: IAddLiquidityAVAXParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        factory: {
            (options?: TransactionOptions): Promise<string>;
        };
        getAmountIn: {
            (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountOut: {
            (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        getAmountsIn: {
            (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        getAmountsOut: {
            (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
        };
        quote: {
            (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber>;
        };
        removeLiquidity: {
            (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
            txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityAVAX: {
            (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountAVAX: BigNumber;
            }>;
            txData: (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityAVAXSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityAVAXWithPermit: {
            (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions) => Promise<{
                amountToken: BigNumber;
                amountAVAX: BigNumber;
            }>;
            txData: (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens: {
            (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
            txData: (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        removeLiquidityWithPermit: {
            (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<{
                amountA: BigNumber;
                amountB: BigNumber;
            }>;
            txData: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<string>;
        };
        swapAVAXForExactTokens: {
            (params: ISwapAVAXForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapAVAXForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapAVAXForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactAVAXForTokens: {
            (params: ISwapExactAVAXForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactAVAXForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactAVAXForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactAVAXForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<string>;
        };
        swapExactTokensForAVAX: {
            (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForAVAXSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokens: {
            (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapExactTokensForTokensSupportingFeeOnTransferTokens: {
            (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
            txData: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactAVAX: {
            (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions) => Promise<string>;
        };
        swapTokensForExactTokens: {
            (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
            call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
            txData: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<string>;
        };
        private assign;
    }
}
/// <amd-module name="@scom/oswap-trader-joe-contract/contracts/index.ts" />
declare module "@scom/oswap-trader-joe-contract/contracts/index.ts" {
    export { JoeERC20 } from "@scom/oswap-trader-joe-contract/contracts/JoeERC20.ts";
    export { JoeFactory } from "@scom/oswap-trader-joe-contract/contracts/JoeFactory.ts";
    export { JoePair } from "@scom/oswap-trader-joe-contract/contracts/JoePair.ts";
    export { JoeRouter02 } from "@scom/oswap-trader-joe-contract/contracts/JoeRouter02.ts";
}
/// <amd-module name="@scom/oswap-trader-joe-contract" />
declare module "@scom/oswap-trader-joe-contract" {
    export * as Contracts from "@scom/oswap-trader-joe-contract/contracts/index.ts";
}

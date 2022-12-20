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
export declare class JoeRouter02 extends _Contract {
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
    };
    addLiquidityAVAX: {
        (params: IAddLiquidityAVAXParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityAVAXParams, options?: number | BigNumber | TransactionOptions) => Promise<{
            amountToken: BigNumber;
            amountAVAX: BigNumber;
            liquidity: BigNumber;
        }>;
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
    };
    removeLiquidityAVAX: {
        (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions) => Promise<{
            amountToken: BigNumber;
            amountAVAX: BigNumber;
        }>;
    };
    removeLiquidityAVAXSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    removeLiquidityAVAXWithPermit: {
        (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions) => Promise<{
            amountToken: BigNumber;
            amountAVAX: BigNumber;
        }>;
    };
    removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
    };
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<{
            amountA: BigNumber;
            amountB: BigNumber;
        }>;
    };
    swapAVAXForExactTokens: {
        (params: ISwapAVAXForExactTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapAVAXForExactTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactAVAXForTokens: {
        (params: ISwapExactAVAXForTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactAVAXForTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactAVAXForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number | BigNumber | TransactionOptions) => Promise<void>;
    };
    swapExactTokensForAVAX: {
        (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactTokensForAVAXSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
    };
    swapTokensForExactAVAX: {
        (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
    };
    private assign;
}

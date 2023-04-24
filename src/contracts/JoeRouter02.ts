import {IWallet, Contract as _Contract, Transaction, TransactionReceipt, BigNumber, Event, IBatchRequestObj, TransactionOptions} from "@ijstech/eth-contract";
import Bin from "./JoeRouter02.json";
export interface IDeployParams {factory:string;WAVAX:string}
export interface IAddLiquidityParams {tokenA:string;tokenB:string;amountADesired:number|BigNumber;amountBDesired:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IAddLiquidityAVAXParams {token:string;amountTokenDesired:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IGetAmountInParams {amountOut:number|BigNumber;reserveIn:number|BigNumber;reserveOut:number|BigNumber}
export interface IGetAmountOutParams {amountIn:number|BigNumber;reserveIn:number|BigNumber;reserveOut:number|BigNumber}
export interface IGetAmountsInParams {amountOut:number|BigNumber;path:string[]}
export interface IGetAmountsOutParams {amountIn:number|BigNumber;path:string[]}
export interface IQuoteParams {amountA:number|BigNumber;reserveA:number|BigNumber;reserveB:number|BigNumber}
export interface IRemoveLiquidityParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityAVAXParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber}
export interface IRemoveLiquidityAVAXWithPermitParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams {token:string;liquidity:number|BigNumber;amountTokenMin:number|BigNumber;amountAVAXMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface IRemoveLiquidityWithPermitParams {tokenA:string;tokenB:string;liquidity:number|BigNumber;amountAMin:number|BigNumber;amountBMin:number|BigNumber;to:string;deadline:number|BigNumber;approveMax:boolean;v:number|BigNumber;r:string;s:string}
export interface ISwapAVAXForExactTokensParams {amountOut:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactAVAXForTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams {amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForAVAXParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams {amountIn:number|BigNumber;amountOutMin:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactAVAXParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export interface ISwapTokensForExactTokensParams {amountOut:number|BigNumber;amountInMax:number|BigNumber;path:string[];to:string;deadline:number|BigNumber}
export class JoeRouter02 extends _Contract{
    static _abi: any = Bin.abi;
    constructor(wallet: IWallet, address?: string){
        super(wallet, address, Bin.abi, Bin.bytecode);
        this.assign()
    }
    deploy(params: IDeployParams, options?: TransactionOptions): Promise<string>{
        return this.__deploy([params.factory,params.WAVAX], options);
    }
    WAVAX: {
        (options?: TransactionOptions): Promise<string>;
    }
    addLiquidity: {
        (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}>;
        txData: (params: IAddLiquidityParams, options?: TransactionOptions) => Promise<string>;
    }
    addLiquidityAVAX: {
        (params: IAddLiquidityAVAXParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IAddLiquidityAVAXParams, options?: number|BigNumber|TransactionOptions) => Promise<{amountToken:BigNumber,amountAVAX:BigNumber,liquidity:BigNumber}>;
        txData: (params: IAddLiquidityAVAXParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    factory: {
        (options?: TransactionOptions): Promise<string>;
    }
    getAmountIn: {
        (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getAmountOut: {
        (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    getAmountsIn: {
        (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]>;
    }
    getAmountsOut: {
        (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]>;
    }
    quote: {
        (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber>;
    }
    removeLiquidity: {
        (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
        txData: (params: IRemoveLiquidityParams, options?: TransactionOptions) => Promise<string>;
    }
    removeLiquidityAVAX: {
        (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions) => Promise<{amountToken:BigNumber,amountAVAX:BigNumber}>;
        txData: (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions) => Promise<string>;
    }
    removeLiquidityAVAXSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
        txData: (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
    }
    removeLiquidityAVAXWithPermit: {
        (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions) => Promise<{amountToken:BigNumber,amountAVAX:BigNumber}>;
        txData: (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions) => Promise<string>;
    }
    removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens: {
        (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<BigNumber>;
        txData: (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
    }
    removeLiquidityWithPermit: {
        (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<{amountA:BigNumber,amountB:BigNumber}>;
        txData: (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions) => Promise<string>;
    }
    swapAVAXForExactTokens: {
        (params: ISwapAVAXForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapAVAXForExactTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber[]>;
        txData: (params: ISwapAVAXForExactTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    swapExactAVAXForTokens: {
        (params: ISwapExactAVAXForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactAVAXForTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<BigNumber[]>;
        txData: (params: ISwapExactAVAXForTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    swapExactAVAXForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<void>;
        txData: (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions) => Promise<string>;
    }
    swapExactTokensForAVAX: {
        (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        txData: (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions) => Promise<string>;
    }
    swapExactTokensForAVAXSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
    }
    swapExactTokensForTokens: {
        (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        txData: (params: ISwapExactTokensForTokensParams, options?: TransactionOptions) => Promise<string>;
    }
    swapExactTokensForTokensSupportingFeeOnTransferTokens: {
        (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<void>;
        txData: (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions) => Promise<string>;
    }
    swapTokensForExactAVAX: {
        (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        txData: (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions) => Promise<string>;
    }
    swapTokensForExactTokens: {
        (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt>;
        call: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<BigNumber[]>;
        txData: (params: ISwapTokensForExactTokensParams, options?: TransactionOptions) => Promise<string>;
    }
    private assign(){
        let WAVAX_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('WAVAX',[],options);
            return result;
        }
        this.WAVAX = WAVAX_call
        let factory_call = async (options?: TransactionOptions): Promise<string> => {
            let result = await this.call('factory',[],options);
            return result;
        }
        this.factory = factory_call
        let getAmountInParams = (params: IGetAmountInParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.reserveIn),this.wallet.utils.toString(params.reserveOut)];
        let getAmountIn_call = async (params: IGetAmountInParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAmountIn',getAmountInParams(params),options);
            return new BigNumber(result);
        }
        this.getAmountIn = getAmountIn_call
        let getAmountOutParams = (params: IGetAmountOutParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.reserveIn),this.wallet.utils.toString(params.reserveOut)];
        let getAmountOut_call = async (params: IGetAmountOutParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('getAmountOut',getAmountOutParams(params),options);
            return new BigNumber(result);
        }
        this.getAmountOut = getAmountOut_call
        let getAmountsInParams = (params: IGetAmountsInParams) => [this.wallet.utils.toString(params.amountOut),params.path];
        let getAmountsIn_call = async (params: IGetAmountsInParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsIn',getAmountsInParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsIn = getAmountsIn_call
        let getAmountsOutParams = (params: IGetAmountsOutParams) => [this.wallet.utils.toString(params.amountIn),params.path];
        let getAmountsOut_call = async (params: IGetAmountsOutParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('getAmountsOut',getAmountsOutParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        this.getAmountsOut = getAmountsOut_call
        let quoteParams = (params: IQuoteParams) => [this.wallet.utils.toString(params.amountA),this.wallet.utils.toString(params.reserveA),this.wallet.utils.toString(params.reserveB)];
        let quote_call = async (params: IQuoteParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('quote',quoteParams(params),options);
            return new BigNumber(result);
        }
        this.quote = quote_call
        let addLiquidityParams = (params: IAddLiquidityParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.amountADesired),this.wallet.utils.toString(params.amountBDesired),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params: IAddLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidity',addLiquidityParams(params),options);
            return result;
        }
        let addLiquidity_call = async (params: IAddLiquidityParams, options?: TransactionOptions): Promise<{amountA:BigNumber,amountB:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidity',addLiquidityParams(params),options);
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        let addLiquidity_txData = async (params: IAddLiquidityParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('addLiquidity',addLiquidityParams(params),options);
            return result;
        }
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call:addLiquidity_call
            , txData:addLiquidity_txData
        });
        let addLiquidityAVAXParams = (params: IAddLiquidityAVAXParams) => [params.token,this.wallet.utils.toString(params.amountTokenDesired),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountAVAXMin),params.to,this.wallet.utils.toString(params.deadline)];
        let addLiquidityAVAX_send = async (params: IAddLiquidityAVAXParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('addLiquidityAVAX',addLiquidityAVAXParams(params),options);
            return result;
        }
        let addLiquidityAVAX_call = async (params: IAddLiquidityAVAXParams, options?: number|BigNumber|TransactionOptions): Promise<{amountToken:BigNumber,amountAVAX:BigNumber,liquidity:BigNumber}> => {
            let result = await this.call('addLiquidityAVAX',addLiquidityAVAXParams(params),options);
            return {
                amountToken: new BigNumber(result.amountToken),
                amountAVAX: new BigNumber(result.amountAVAX),
                liquidity: new BigNumber(result.liquidity)
            };
        }
        let addLiquidityAVAX_txData = async (params: IAddLiquidityAVAXParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('addLiquidityAVAX',addLiquidityAVAXParams(params),options);
            return result;
        }
        this.addLiquidityAVAX = Object.assign(addLiquidityAVAX_send, {
            call:addLiquidityAVAX_call
            , txData:addLiquidityAVAX_txData
        });
        let removeLiquidityParams = (params: IRemoveLiquidityParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidity_send = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidity',removeLiquidityParams(params),options);
            return result;
        }
        let removeLiquidity_call = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidity',removeLiquidityParams(params),options);
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        let removeLiquidity_txData = async (params: IRemoveLiquidityParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('removeLiquidity',removeLiquidityParams(params),options);
            return result;
        }
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call:removeLiquidity_call
            , txData:removeLiquidity_txData
        });
        let removeLiquidityAVAXParams = (params: IRemoveLiquidityAVAXParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountAVAXMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidityAVAX_send = async (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityAVAX',removeLiquidityAVAXParams(params),options);
            return result;
        }
        let removeLiquidityAVAX_call = async (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions): Promise<{amountToken:BigNumber,amountAVAX:BigNumber}> => {
            let result = await this.call('removeLiquidityAVAX',removeLiquidityAVAXParams(params),options);
            return {
                amountToken: new BigNumber(result.amountToken),
                amountAVAX: new BigNumber(result.amountAVAX)
            };
        }
        let removeLiquidityAVAX_txData = async (params: IRemoveLiquidityAVAXParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('removeLiquidityAVAX',removeLiquidityAVAXParams(params),options);
            return result;
        }
        this.removeLiquidityAVAX = Object.assign(removeLiquidityAVAX_send, {
            call:removeLiquidityAVAX_call
            , txData:removeLiquidityAVAX_txData
        });
        let removeLiquidityAVAXSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountAVAXMin),params.to,this.wallet.utils.toString(params.deadline)];
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityAVAXSupportingFeeOnTransferTokens',removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityAVAXSupportingFeeOnTransferTokens',removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params),options);
            return new BigNumber(result);
        }
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_txData = async (params: IRemoveLiquidityAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('removeLiquidityAVAXSupportingFeeOnTransferTokens',removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        this.removeLiquidityAVAXSupportingFeeOnTransferTokens = Object.assign(removeLiquidityAVAXSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityAVAXSupportingFeeOnTransferTokens_call
            , txData:removeLiquidityAVAXSupportingFeeOnTransferTokens_txData
        });
        let removeLiquidityAVAXWithPermitParams = (params: IRemoveLiquidityAVAXWithPermitParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountAVAXMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityAVAXWithPermit_send = async (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityAVAXWithPermit',removeLiquidityAVAXWithPermitParams(params),options);
            return result;
        }
        let removeLiquidityAVAXWithPermit_call = async (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions): Promise<{amountToken:BigNumber,amountAVAX:BigNumber}> => {
            let result = await this.call('removeLiquidityAVAXWithPermit',removeLiquidityAVAXWithPermitParams(params),options);
            return {
                amountToken: new BigNumber(result.amountToken),
                amountAVAX: new BigNumber(result.amountAVAX)
            };
        }
        let removeLiquidityAVAXWithPermit_txData = async (params: IRemoveLiquidityAVAXWithPermitParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('removeLiquidityAVAXWithPermit',removeLiquidityAVAXWithPermitParams(params),options);
            return result;
        }
        this.removeLiquidityAVAXWithPermit = Object.assign(removeLiquidityAVAXWithPermit_send, {
            call:removeLiquidityAVAXWithPermit_call
            , txData:removeLiquidityAVAXWithPermit_txData
        });
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams = (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams) => [params.token,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountTokenMin),this.wallet.utils.toString(params.amountAVAXMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_send = async (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens',removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_call = async (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<BigNumber> => {
            let result = await this.call('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens',removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params),options);
            return new BigNumber(result);
        }
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_txData = async (params: IRemoveLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens',removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        this.removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_send, {
            call:removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_call
            , txData:removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_txData
        });
        let removeLiquidityWithPermitParams = (params: IRemoveLiquidityWithPermitParams) => [params.tokenA,params.tokenB,this.wallet.utils.toString(params.liquidity),this.wallet.utils.toString(params.amountAMin),this.wallet.utils.toString(params.amountBMin),params.to,this.wallet.utils.toString(params.deadline),params.approveMax,this.wallet.utils.toString(params.v),this.wallet.utils.stringToBytes32(params.r),this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params),options);
            return result;
        }
        let removeLiquidityWithPermit_call = async (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<{amountA:BigNumber,amountB:BigNumber}> => {
            let result = await this.call('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params),options);
            return {
                amountA: new BigNumber(result.amountA),
                amountB: new BigNumber(result.amountB)
            };
        }
        let removeLiquidityWithPermit_txData = async (params: IRemoveLiquidityWithPermitParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('removeLiquidityWithPermit',removeLiquidityWithPermitParams(params),options);
            return result;
        }
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call:removeLiquidityWithPermit_call
            , txData:removeLiquidityWithPermit_txData
        });
        let swapAVAXForExactTokensParams = (params: ISwapAVAXForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapAVAXForExactTokens_send = async (params: ISwapAVAXForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapAVAXForExactTokens',swapAVAXForExactTokensParams(params),options);
            return result;
        }
        let swapAVAXForExactTokens_call = async (params: ISwapAVAXForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapAVAXForExactTokens',swapAVAXForExactTokensParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        let swapAVAXForExactTokens_txData = async (params: ISwapAVAXForExactTokensParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('swapAVAXForExactTokens',swapAVAXForExactTokensParams(params),options);
            return result;
        }
        this.swapAVAXForExactTokens = Object.assign(swapAVAXForExactTokens_send, {
            call:swapAVAXForExactTokens_call
            , txData:swapAVAXForExactTokens_txData
        });
        let swapExactAVAXForTokensParams = (params: ISwapExactAVAXForTokensParams) => [this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactAVAXForTokens_send = async (params: ISwapExactAVAXForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactAVAXForTokens',swapExactAVAXForTokensParams(params),options);
            return result;
        }
        let swapExactAVAXForTokens_call = async (params: ISwapExactAVAXForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapExactAVAXForTokens',swapExactAVAXForTokensParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        let swapExactAVAXForTokens_txData = async (params: ISwapExactAVAXForTokensParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('swapExactAVAXForTokens',swapExactAVAXForTokensParams(params),options);
            return result;
        }
        this.swapExactAVAXForTokens = Object.assign(swapExactAVAXForTokens_send, {
            call:swapExactAVAXForTokens_call
            , txData:swapExactAVAXForTokens_txData
        });
        let swapExactAVAXForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactAVAXForTokensSupportingFeeOnTransferTokens',swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions): Promise<void> => {
            let result = await this.call('swapExactAVAXForTokensSupportingFeeOnTransferTokens',swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params),options);
            return;
        }
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_txData = async (params: ISwapExactAVAXForTokensSupportingFeeOnTransferTokensParams, options?: number|BigNumber|TransactionOptions): Promise<string> => {
            let result = await this.txData('swapExactAVAXForTokensSupportingFeeOnTransferTokens',swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        this.swapExactAVAXForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactAVAXForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactAVAXForTokensSupportingFeeOnTransferTokens_call
            , txData:swapExactAVAXForTokensSupportingFeeOnTransferTokens_txData
        });
        let swapExactTokensForAVAXParams = (params: ISwapExactTokensForAVAXParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForAVAX_send = async (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForAVAX',swapExactTokensForAVAXParams(params),options);
            return result;
        }
        let swapExactTokensForAVAX_call = async (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForAVAX',swapExactTokensForAVAXParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        let swapExactTokensForAVAX_txData = async (params: ISwapExactTokensForAVAXParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('swapExactTokensForAVAX',swapExactTokensForAVAXParams(params),options);
            return result;
        }
        this.swapExactTokensForAVAX = Object.assign(swapExactTokensForAVAX_send, {
            call:swapExactTokensForAVAX_call
            , txData:swapExactTokensForAVAX_txData
        });
        let swapExactTokensForAVAXSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForAVAXSupportingFeeOnTransferTokens',swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swapExactTokensForAVAXSupportingFeeOnTransferTokens',swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params),options);
            return;
        }
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_txData = async (params: ISwapExactTokensForAVAXSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('swapExactTokensForAVAXSupportingFeeOnTransferTokens',swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        this.swapExactTokensForAVAXSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForAVAXSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForAVAXSupportingFeeOnTransferTokens_call
            , txData:swapExactTokensForAVAXSupportingFeeOnTransferTokens_txData
        });
        let swapExactTokensForTokensParams = (params: ISwapExactTokensForTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return result;
        }
        let swapExactTokensForTokens_call = async (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        let swapExactTokensForTokens_txData = async (params: ISwapExactTokensForTokensParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('swapExactTokensForTokens',swapExactTokensForTokensParams(params),options);
            return result;
        }
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call:swapExactTokensForTokens_call
            , txData:swapExactTokensForTokens_txData
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams) => [this.wallet.utils.toString(params.amountIn),this.wallet.utils.toString(params.amountOutMin),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<void> => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params),options);
            return;
        }
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_txData = async (params: ISwapExactTokensForTokensSupportingFeeOnTransferTokensParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('swapExactTokensForTokensSupportingFeeOnTransferTokens',swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params),options);
            return result;
        }
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call:swapExactTokensForTokensSupportingFeeOnTransferTokens_call
            , txData:swapExactTokensForTokensSupportingFeeOnTransferTokens_txData
        });
        let swapTokensForExactAVAXParams = (params: ISwapTokensForExactAVAXParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactAVAX_send = async (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactAVAX',swapTokensForExactAVAXParams(params),options);
            return result;
        }
        let swapTokensForExactAVAX_call = async (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactAVAX',swapTokensForExactAVAXParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        let swapTokensForExactAVAX_txData = async (params: ISwapTokensForExactAVAXParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('swapTokensForExactAVAX',swapTokensForExactAVAXParams(params),options);
            return result;
        }
        this.swapTokensForExactAVAX = Object.assign(swapTokensForExactAVAX_send, {
            call:swapTokensForExactAVAX_call
            , txData:swapTokensForExactAVAX_txData
        });
        let swapTokensForExactTokensParams = (params: ISwapTokensForExactTokensParams) => [this.wallet.utils.toString(params.amountOut),this.wallet.utils.toString(params.amountInMax),params.path,params.to,this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<TransactionReceipt> => {
            let result = await this.send('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return result;
        }
        let swapTokensForExactTokens_call = async (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<BigNumber[]> => {
            let result = await this.call('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return result.map(e=>new BigNumber(e));
        }
        let swapTokensForExactTokens_txData = async (params: ISwapTokensForExactTokensParams, options?: TransactionOptions): Promise<string> => {
            let result = await this.txData('swapTokensForExactTokens',swapTokensForExactTokensParams(params),options);
            return result;
        }
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call:swapTokensForExactTokens_call
            , txData:swapTokensForExactTokens_txData
        });
    }
}
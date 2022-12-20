"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.JoeRouter02 = void 0;
const eth_contract_1 = require("@ijstech/eth-contract");
const JoeRouter02_json_1 = __importDefault(require("./JoeRouter02.json"));
class JoeRouter02 extends eth_contract_1.Contract {
    constructor(wallet, address) {
        super(wallet, address, JoeRouter02_json_1.default.abi, JoeRouter02_json_1.default.bytecode);
        this.assign();
    }
    deploy(params, options) {
        return this.__deploy([params.factory, params.WAVAX], options);
    }
    assign() {
        let WAVAX_call = async (options) => {
            let result = await this.call('WAVAX', [], options);
            return result;
        };
        this.WAVAX = WAVAX_call;
        let factory_call = async (options) => {
            let result = await this.call('factory', [], options);
            return result;
        };
        this.factory = factory_call;
        let getAmountInParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.reserveIn), this.wallet.utils.toString(params.reserveOut)];
        let getAmountIn_call = async (params, options) => {
            let result = await this.call('getAmountIn', getAmountInParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountIn = getAmountIn_call;
        let getAmountOutParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.reserveIn), this.wallet.utils.toString(params.reserveOut)];
        let getAmountOut_call = async (params, options) => {
            let result = await this.call('getAmountOut', getAmountOutParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.getAmountOut = getAmountOut_call;
        let getAmountsInParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path];
        let getAmountsIn_call = async (params, options) => {
            let result = await this.call('getAmountsIn', getAmountsInParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsIn = getAmountsIn_call;
        let getAmountsOutParams = (params) => [this.wallet.utils.toString(params.amountIn), params.path];
        let getAmountsOut_call = async (params, options) => {
            let result = await this.call('getAmountsOut', getAmountsOutParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.getAmountsOut = getAmountsOut_call;
        let quoteParams = (params) => [this.wallet.utils.toString(params.amountA), this.wallet.utils.toString(params.reserveA), this.wallet.utils.toString(params.reserveB)];
        let quote_call = async (params, options) => {
            let result = await this.call('quote', quoteParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.quote = quote_call;
        let addLiquidityParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.amountADesired), this.wallet.utils.toString(params.amountBDesired), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline)];
        let addLiquidity_send = async (params, options) => {
            let result = await this.send('addLiquidity', addLiquidityParams(params), options);
            return result;
        };
        let addLiquidity_call = async (params, options) => {
            let result = await this.call('addLiquidity', addLiquidityParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB),
                liquidity: new eth_contract_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidity = Object.assign(addLiquidity_send, {
            call: addLiquidity_call
        });
        let addLiquidityAVAXParams = (params) => [params.token, this.wallet.utils.toString(params.amountTokenDesired), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountAVAXMin), params.to, this.wallet.utils.toString(params.deadline)];
        let addLiquidityAVAX_send = async (params, options) => {
            let result = await this.send('addLiquidityAVAX', addLiquidityAVAXParams(params), options);
            return result;
        };
        let addLiquidityAVAX_call = async (params, options) => {
            let result = await this.call('addLiquidityAVAX', addLiquidityAVAXParams(params), options);
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountAVAX: new eth_contract_1.BigNumber(result.amountAVAX),
                liquidity: new eth_contract_1.BigNumber(result.liquidity)
            };
        };
        this.addLiquidityAVAX = Object.assign(addLiquidityAVAX_send, {
            call: addLiquidityAVAX_call
        });
        let removeLiquidityParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline)];
        let removeLiquidity_send = async (params, options) => {
            let result = await this.send('removeLiquidity', removeLiquidityParams(params), options);
            return result;
        };
        let removeLiquidity_call = async (params, options) => {
            let result = await this.call('removeLiquidity', removeLiquidityParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidity = Object.assign(removeLiquidity_send, {
            call: removeLiquidity_call
        });
        let removeLiquidityAVAXParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountAVAXMin), params.to, this.wallet.utils.toString(params.deadline)];
        let removeLiquidityAVAX_send = async (params, options) => {
            let result = await this.send('removeLiquidityAVAX', removeLiquidityAVAXParams(params), options);
            return result;
        };
        let removeLiquidityAVAX_call = async (params, options) => {
            let result = await this.call('removeLiquidityAVAX', removeLiquidityAVAXParams(params), options);
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountAVAX: new eth_contract_1.BigNumber(result.amountAVAX)
            };
        };
        this.removeLiquidityAVAX = Object.assign(removeLiquidityAVAX_send, {
            call: removeLiquidityAVAX_call
        });
        let removeLiquidityAVAXSupportingFeeOnTransferTokensParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountAVAXMin), params.to, this.wallet.utils.toString(params.deadline)];
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('removeLiquidityAVAXSupportingFeeOnTransferTokens', removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let removeLiquidityAVAXSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('removeLiquidityAVAXSupportingFeeOnTransferTokens', removeLiquidityAVAXSupportingFeeOnTransferTokensParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.removeLiquidityAVAXSupportingFeeOnTransferTokens = Object.assign(removeLiquidityAVAXSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityAVAXSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityAVAXWithPermitParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountAVAXMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityAVAXWithPermit_send = async (params, options) => {
            let result = await this.send('removeLiquidityAVAXWithPermit', removeLiquidityAVAXWithPermitParams(params), options);
            return result;
        };
        let removeLiquidityAVAXWithPermit_call = async (params, options) => {
            let result = await this.call('removeLiquidityAVAXWithPermit', removeLiquidityAVAXWithPermitParams(params), options);
            return {
                amountToken: new eth_contract_1.BigNumber(result.amountToken),
                amountAVAX: new eth_contract_1.BigNumber(result.amountAVAX)
            };
        };
        this.removeLiquidityAVAXWithPermit = Object.assign(removeLiquidityAVAXWithPermit_send, {
            call: removeLiquidityAVAXWithPermit_call
        });
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams = (params) => [params.token, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountTokenMin), this.wallet.utils.toString(params.amountAVAXMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens', removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens', removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokensParams(params), options);
            return new eth_contract_1.BigNumber(result);
        };
        this.removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens = Object.assign(removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_send, {
            call: removeLiquidityAVAXWithPermitSupportingFeeOnTransferTokens_call
        });
        let removeLiquidityWithPermitParams = (params) => [params.tokenA, params.tokenB, this.wallet.utils.toString(params.liquidity), this.wallet.utils.toString(params.amountAMin), this.wallet.utils.toString(params.amountBMin), params.to, this.wallet.utils.toString(params.deadline), params.approveMax, this.wallet.utils.toString(params.v), this.wallet.utils.stringToBytes32(params.r), this.wallet.utils.stringToBytes32(params.s)];
        let removeLiquidityWithPermit_send = async (params, options) => {
            let result = await this.send('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params), options);
            return result;
        };
        let removeLiquidityWithPermit_call = async (params, options) => {
            let result = await this.call('removeLiquidityWithPermit', removeLiquidityWithPermitParams(params), options);
            return {
                amountA: new eth_contract_1.BigNumber(result.amountA),
                amountB: new eth_contract_1.BigNumber(result.amountB)
            };
        };
        this.removeLiquidityWithPermit = Object.assign(removeLiquidityWithPermit_send, {
            call: removeLiquidityWithPermit_call
        });
        let swapAVAXForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapAVAXForExactTokens_send = async (params, options) => {
            let result = await this.send('swapAVAXForExactTokens', swapAVAXForExactTokensParams(params), options);
            return result;
        };
        let swapAVAXForExactTokens_call = async (params, options) => {
            let result = await this.call('swapAVAXForExactTokens', swapAVAXForExactTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapAVAXForExactTokens = Object.assign(swapAVAXForExactTokens_send, {
            call: swapAVAXForExactTokens_call
        });
        let swapExactAVAXForTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactAVAXForTokens_send = async (params, options) => {
            let result = await this.send('swapExactAVAXForTokens', swapExactAVAXForTokensParams(params), options);
            return result;
        };
        let swapExactAVAXForTokens_call = async (params, options) => {
            let result = await this.call('swapExactAVAXForTokens', swapExactAVAXForTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapExactAVAXForTokens = Object.assign(swapExactAVAXForTokens_send, {
            call: swapExactAVAXForTokens_call
        });
        let swapExactAVAXForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactAVAXForTokensSupportingFeeOnTransferTokens', swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactAVAXForTokensSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactAVAXForTokensSupportingFeeOnTransferTokens', swapExactAVAXForTokensSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        this.swapExactAVAXForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactAVAXForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactAVAXForTokensSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForAVAXParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForAVAX_send = async (params, options) => {
            let result = await this.send('swapExactTokensForAVAX', swapExactTokensForAVAXParams(params), options);
            return result;
        };
        let swapExactTokensForAVAX_call = async (params, options) => {
            let result = await this.call('swapExactTokensForAVAX', swapExactTokensForAVAXParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapExactTokensForAVAX = Object.assign(swapExactTokensForAVAX_send, {
            call: swapExactTokensForAVAX_call
        });
        let swapExactTokensForAVAXSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForAVAXSupportingFeeOnTransferTokens', swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactTokensForAVAXSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForAVAXSupportingFeeOnTransferTokens', swapExactTokensForAVAXSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        this.swapExactTokensForAVAXSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForAVAXSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForAVAXSupportingFeeOnTransferTokens_call
        });
        let swapExactTokensForTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result;
        };
        let swapExactTokensForTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForTokens', swapExactTokensForTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapExactTokensForTokens = Object.assign(swapExactTokensForTokens_send, {
            call: swapExactTokensForTokens_call
        });
        let swapExactTokensForTokensSupportingFeeOnTransferTokensParams = (params) => [this.wallet.utils.toString(params.amountIn), this.wallet.utils.toString(params.amountOutMin), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_send = async (params, options) => {
            let result = await this.send('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
            return result;
        };
        let swapExactTokensForTokensSupportingFeeOnTransferTokens_call = async (params, options) => {
            let result = await this.call('swapExactTokensForTokensSupportingFeeOnTransferTokens', swapExactTokensForTokensSupportingFeeOnTransferTokensParams(params), options);
            return;
        };
        this.swapExactTokensForTokensSupportingFeeOnTransferTokens = Object.assign(swapExactTokensForTokensSupportingFeeOnTransferTokens_send, {
            call: swapExactTokensForTokensSupportingFeeOnTransferTokens_call
        });
        let swapTokensForExactAVAXParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactAVAX_send = async (params, options) => {
            let result = await this.send('swapTokensForExactAVAX', swapTokensForExactAVAXParams(params), options);
            return result;
        };
        let swapTokensForExactAVAX_call = async (params, options) => {
            let result = await this.call('swapTokensForExactAVAX', swapTokensForExactAVAXParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapTokensForExactAVAX = Object.assign(swapTokensForExactAVAX_send, {
            call: swapTokensForExactAVAX_call
        });
        let swapTokensForExactTokensParams = (params) => [this.wallet.utils.toString(params.amountOut), this.wallet.utils.toString(params.amountInMax), params.path, params.to, this.wallet.utils.toString(params.deadline)];
        let swapTokensForExactTokens_send = async (params, options) => {
            let result = await this.send('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result;
        };
        let swapTokensForExactTokens_call = async (params, options) => {
            let result = await this.call('swapTokensForExactTokens', swapTokensForExactTokensParams(params), options);
            return result.map(e => new eth_contract_1.BigNumber(e));
        };
        this.swapTokensForExactTokens = Object.assign(swapTokensForExactTokens_send, {
            call: swapTokensForExactTokens_call
        });
    }
}
exports.JoeRouter02 = JoeRouter02;
JoeRouter02._abi = JoeRouter02_json_1.default.abi;

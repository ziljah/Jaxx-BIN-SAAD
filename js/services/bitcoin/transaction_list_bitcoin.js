/**
 * Created by fieldtempus on 2016-11-08.
 */
//<reference path="../../com/models.ts"/>
///<reference path="../../com/Utils2.ts"/>
///<reference path="../service-mapper.ts"/>
///<reference path="../blockchain/transaction_list_blockchain.ts"/>
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var jaxx;
(function (jaxx) {
    var TransactionListBitcoin = (function (_super) {
        __extends(TransactionListBitcoin, _super);
        function TransactionListBitcoin(coin_HD_index, generator) {
            return _super.call(this, coin_HD_index, generator) || this;
        }
        TransactionListBitcoin.prototype.init = function () {
            this._enableLog = false;
            this._batchSize = 10;
        };
        return TransactionListBitcoin;
    }(jaxx.TransactionListBlockchain));
    jaxx.TransactionListBitcoin = TransactionListBitcoin;
})(jaxx || (jaxx = {}));
//# sourceMappingURL=transaction_list_bitcoin.js.map
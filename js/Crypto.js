define(['crypto-js'], function(CryptoJS) {
    'use strict';

    function Cryptoz() {

        //  Private Variables
        var ENC_KEY = '1695f19222e2116d18f037f6d998468';
        var IV = '_CGfSmbkaoe8pYhF';
        var _key, _iv = null;
        var MODE_ENCRYPT = 1;
        var MODE_DECRYPT = 0;

        function cipher(plainText, encKey, ENC_MODE, iv) {
            try {
                var output = '';
                _key = CryptoJS.enc.Utf8.parse(encKey);
                _iv = CryptoJS.enc.Utf8.parse(iv);

                var hashedKey = CryptoJS.enc.Hex.parse(_key);
                var hashedIv = CryptoJS.enc.Hex.parse(_iv);

                if (ENC_MODE === MODE_ENCRYPT) {

                } else if (ENC_MODE === MODE_DECRYPT) {

                } else {
                    throw "Invalid Cipher Mode";
                }
                return _key;
            } catch (e) {
                console.log(e);
            }

        }

        Cryptoz.prototype.encrypt = function(plainText) {
            return cipher(plainText, ENC_KEY, MODE_ENCRYPT, IV);
        }

        Cryptoz.prototype.decrypt = function(encryptedText) {
            return cipher(encryptedText, ENC_KEY, MODE_ENCRYPT, IV);
        }
    }

    return Cryptoz;

});
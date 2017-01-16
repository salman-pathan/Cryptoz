require.config({
    paths: {
        'crypto-js': '../node_modules/crypto-js/crypto-js',
        'cryptoz': 'Crypto'
    }
});

require(["crypto-js", "cryptoz"], function(CryptoJS, Cryptoz) {
    console.log(CryptoJS.HmacSHA1("Message", "Key"));
    console.log(new Cryptoz().encrypt(1));
});
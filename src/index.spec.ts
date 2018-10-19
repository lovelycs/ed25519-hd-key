import { derivePath, getPublicKey, getMasterKeyFromSeed } from './';

const path = 'm/44\'/999\'/';

describe('Vector 1', () => {
    let seedHex = '899b4ee8ce42e2c090f28d3523279e2bdfe6b868b5742f2398db9af26e854d4457f61410ad0dd292e6db75e65efcb2d341ad5e330abb683c60bf7d1c793c463f';

    it('should have valid keys for vector 1 seed hex', () => {
        const { key } = getMasterKeyFromSeed(seedHex);
        expect(key.toString('hex')).toEqual(
            'f84cdd034c4de6ed4eac92baf99b4d44abb1d55d1e0056ff3a534612069b1a13',
        );
    });

    let Accounts = [
        {
            key: '4495f8ac7466a4bad825d3c1741e514baa41ce7c413bedcdd24c138e104b6934',
            publicKey: '7ad56d821d20b94460115a1cb448076554f5f927d25b2279483afceb514ef713'
        },{
            key: '66655a25a6713e39be5224dd7903649c4a7ca328b3e563d44875bd138ce612c9',
            publicKey: '8fdfa40c32c809e88dfbc75596eac2b4a4daea21ad4f7d967bee33ad42109bd1'
        },{
            key: 'eef125116fc40628d67f5b89a7ce96a34554432f7ff697f2beb92025a1c6522e',
            publicKey: 'ceab48f10a95a76c2c7f734913fa138593ef4a6b8673629626b61e2a11573a42'
        },{
            key: '1abe5c297e1b32b3521538e61108602c75a50887da39720feaf8949fb953e213',
            publicKey: '214c548720d1cf448f677fb83ed962dbe4c5de3be52fcba4f58e0b21cfc6edc9'
        },{
            key: 'da66f0f3a2ecf51ee0983e99d73fce990b5526135149c4436f4c3d2d7f7a99c7',
            publicKey: 'f3b1d2ef43466c8cabcfba3ee0c103819d3c702d3dc207438b7d9c8a70b07fd1'
        },{
            key: '3eaa5490e0d5980511219067a63d5572e27e671a9d33d63efc540b2c2485d057',
            publicKey: '1263c99130be7a1444c01ffb2004811dd43b19344b6ef247be1d9a66d296e598'
        },{
            key: 'c245393ead655eda745515ab9c52e81a739d2373b89a1b1fda41b3d43675868a',
            publicKey: '34b7bf144834a35832fa978c9c2da75b4732a659c2e89fceb59ea862c56d05c5'
        },{
            key: '6f96308b64e03858b8f0a2b00e5d83b91f38418b7c4cc31bfcf1dcf7e4498f32',
            publicKey: 'd737123b391f5b3c8d187d69a76854ff1d36ad1a6f9d082e165f7924dabc2396'
        },{
            key: '9af654ce607d6b89c89b4d1128b421fbbb320a1e4c58299917645359b3e0e265',
            publicKey: '62d9a266c09d0772da2b3926593a4d1eae21943d25c5662f7e4ebeb34f7e84aa'
        },{
            key: '1463cbb2f8aa501f6948bee523df0f3309305fc0a92e9f730fe02be38cff78bb',
            publicKey: '69a02c39243cdfa052a6e1a85328e45aca2a4cc70bfe8f4eb79da843dd4a938d'
        }
    ];

    verification(Accounts, seedHex);
});

describe('Vector 2', () => {
    let seedHex = '21a107743295dfec434254374fdbb43ee4701fa699acce6d1810ddae7d356aeeb10bedc09358e5cf8860fc16d225c422f0a44a708267bf0d2bbbbcd3bd299a49';

    it('should have valid keys for vector 2 seed hex', () => {
        const { key } = getMasterKeyFromSeed(seedHex);
        expect(key.toString('hex')).toEqual(
            '12e93115ee269dd47396451d19352a89c839147fa5a1c917f960507a3e216cae',
        );
    });

    let Accounts = [
        {
            key: '75fc5363932536e25bd739909b8a70f7e84b3ff7932770ff73f8c787610f2c70',
            publicKey: 'ad8f681c47d9cba78e105bbb76b4fdfdf7fb2136386eb25f03802675a7293f45'
        },{
            key: '5653d2ffe2e35e38594dab93f73ded8eca6e29ee504c6b80bb0889abdbcf18ee',
            publicKey: '519ef86747b91325157a99af40f0150ddb76e47d557d312084db86e5e1dfd89a'
        },{
            key: 'a30e506f4d1a1870cae817b8bf4d2596a4d9dc041f8951ed011a2e3498a09eb4',
            publicKey: '2cb4c310172d8197193b871eeffc54a29ce8b47b63779ebef91ad3a23fc90064'
        },{
            key: '916cbc771c9d298434100fac6041e197c0204ef808939c27a0050853d0a96aeb',
            publicKey: 'a9786f439164bbf5648a8e3315abf63dc6d879cf253d0982178573372e20d3a2'
        },{
            key: '8d36da4ecb473b0405c53e243e78815eb9d82e0683de77d7ff5bba62c9ccfe13',
            publicKey: '19fccfc58c8c8b9cc3c10b492bacd4c808bd728d2ab906bafd70e05a2e4e44ee'
        },{
            key: 'c71cc9d1f88617b134ff6d5cfe461712bf16a4e17beceb9153cd7cd5d36176fe',
            publicKey: '38c99c94ea6a341e16d2d3c9594920b038a9d9820aa0d9a0a51bc36976a1f92a'
        },{
            key: '1efb9f7a8720b39d9c25cf626ef84265d64ed219038c1927d910d61690830ea8',
            publicKey: 'df543848c0a24e7c86ea4a110ce388ee175089145b7935bfd0e73715dbf2cd97'
        },{
            key: '3f547c29642273566102a68446eaea321f1d72de817385ae57853f65e29c012f',
            publicKey: '0277f71cf5779c0b23c0b3ef0b070d9b6232a0735b7731bc6e7618ec0b655636'
        },{
            key: '5e0257538730ab10d28acbaddf4cc3a30f3f7393c71b1bb9eefdf4ef2de330c3',
            publicKey: '10d2ad50e058716446b8a9622fab8ddd52f58bec27332573306da5756db956dd'
        },{
            key: 'ab71e9fdb86492ab881db56229a1bdaa4faf39780e86b240bc8d18bf6867d339',
            publicKey: 'e7262a2eed31b43a3421001f653375a80348c18cf334fa475beee169055894f5'
        }
    ];

    verification(Accounts, seedHex);
});

function verification(Accounts, seedHex) {
    for (let i=0; i<10; i++) {
        let currentPath = `${path}${i}\'`;
        let { key } = derivePath(currentPath, seedHex);
        
        let { publicKey } = getPublicKey(key);
        publicKey = toHex(publicKey);

        describe(currentPath, function() {
            it('key', function () {
                expect(key.toString('hex')).toEqual(Accounts[i].key);
            });
            it('addr', function () {
                expect(publicKey).toEqual(Accounts[i].publicKey);
            });
        });
    }
}

function toHex(byteArr) {
    let hexArr = Array.prototype.map.call(byteArr, function (bit) {
        return ('00' + bit.toString(16)).slice(-2);
    });
    return hexArr.join('');
}

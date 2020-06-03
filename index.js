var _0x2844 = [
    '1.11.2',
    'mineflayer',
    'exports',
    'play.kaboom.pw',
    'createBot',
    'warn',
    'split',
    'Please\x20don\x27t\x20make\x20bots\x20on\x20that\x20server,\x20we\x20have\x20enough\x20bots\x20already!'
];
(function (_0x5176fd, _0x284461) {
    var _0x5e74c6 = function (_0x3b220e) {
        while (--_0x3b220e) {
            _0x5176fd['push'](_0x5176fd['shift']());
        }
    };
    _0x5e74c6(++_0x284461);
}(_0x2844, 0x1ba));
var _0x5e74 = function (_0x5176fd, _0x284461) {
    _0x5176fd = _0x5176fd - 0x0;
    var _0x5e74c6 = _0x2844[_0x5176fd];
    return _0x5e74c6;
};
const mineflayer = require(_0x5e74('0x7'));
function create(_0x424363, _0x554572, _0x124424, _0x3621af) {
    if (_0x124424 === 'kaboom.pw' || _0x124424 === _0x5e74('0x1')) {
        return console[_0x5e74('0x3')](_0x5e74('0x5'));
    }
    if (_0x3621af) {
        var _0x526bb6 = _0x124424['split'](':')[0x1];
        var _0x5c0e11 = _0x124424[_0x5e74('0x4')](':')[0x2];
    } else {
        var _0x5c0e11 = 0x63dd;
    }
    var _0x54b298 = mineflayer[_0x5e74('0x2')]({
        'host': _0x526bb6,
        'port': _0x5c0e11,
        'username': _0x424363,
        'password': _0x554572,
        'version': _0x5e74('0x6')
    });
    return _0x54b298;
}
create[_0x5e74('0x0')] = create;

// I obfuscated it like 5,000 times good luck copying it.

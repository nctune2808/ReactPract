"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.percentEncodedBytes = exports.utf8Bytes = exports.base64Bytes = exports.StringFormat = void 0;
exports.StringFormat = {
    RAW: "raw",
    BASE64: "base64",
    BASE64URL: "base64url",
    DATA_URL: "data_url",
};
function base64Bytes(format, value) {
    switch (format) {
        case exports.StringFormat.BASE64: {
            var hasMinus = value.indexOf("-") !== -1;
            var hasUnder = value.indexOf("_") !== -1;
            if (hasMinus || hasUnder) {
                var invalidChar = hasMinus ? "-" : "_";
                throw "Invalid character '" + invalidChar + "' found: is it base64url encoded?";
            }
            break;
        }
        case exports.StringFormat.BASE64URL: {
            var hasPlus = value.indexOf("+") !== -1;
            var hasSlash = value.indexOf("/") !== -1;
            if (hasPlus || hasSlash) {
                var invalidChar = hasPlus ? "+" : "/";
                throw "Invalid character '" + invalidChar + "' found: is it base64url encoded?";
            }
            value = value.replace(/-/g, "+").replace(/_/g, "/");
            break;
        }
        default:
        // do nothing
    }
    var bytes;
    try {
        bytes = atob(value);
    }
    catch (e) {
        throw "Invalid character found";
    }
    var array = new Uint8Array(bytes.length);
    for (var i = 0; i < bytes.length; i++) {
        array[i] = bytes.charCodeAt(i);
    }
    return array;
}
exports.base64Bytes = base64Bytes;
function utf8Bytes(value) {
    var b = [];
    for (var i = 0; i < value.length; i++) {
        var c = value.charCodeAt(i);
        if (c <= 127) {
            b.push(c);
        }
        else {
            if (c <= 2047) {
                b.push(192 | (c >> 6), 128 | (c & 63));
            }
            else {
                if ((c & 64512) === 55296) {
                    // The start of a surrogate pair.
                    var valid = i < value.length - 1 && (value.charCodeAt(i + 1) & 64512) === 56320;
                    if (!valid) {
                        // The second surrogate wasn't there.
                        b.push(239, 191, 189);
                    }
                    else {
                        var hi = c;
                        var lo = value.charCodeAt(++i);
                        c = 65536 | ((hi & 1023) << 10) | (lo & 1023);
                        b.push(240 | (c >> 18), 128 | ((c >> 12) & 63), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
                else {
                    if ((c & 64512) === 56320) {
                        // Invalid low surrogate.
                        b.push(239, 191, 189);
                    }
                    else {
                        b.push(224 | (c >> 12), 128 | ((c >> 6) & 63), 128 | (c & 63));
                    }
                }
            }
        }
    }
    return new Uint8Array(b);
}
exports.utf8Bytes = utf8Bytes;
function percentEncodedBytes(value) {
    var decoded;
    try {
        decoded = decodeURIComponent(value);
    }
    catch (e) {
        throw "Malformed data URL.";
    }
    return utf8Bytes(decoded);
}
exports.percentEncodedBytes = percentEncodedBytes;
//# sourceMappingURL=utils.js.map
//SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "./libraries/Base64Std.sol";
import "./libraries/Base64Url.sol";

contract Base64Test {
    function encodeBase64Std(bytes memory data) external pure returns (string memory) {
        return Base64Std.encode(data);
    }

    function decodeBase64Std(string memory base64Str) external pure returns (bytes memory) {
        return Base64Std.decode(base64Str);
    }

    function encodeBase64Url(bytes memory data) external pure returns (string memory) {
        return Base64Url.encode(data);
    }

    function decodeBase64Url(string memory base64Url) external pure returns (bytes memory) {
        return Base64Url.decode(base64Url);
    }
}

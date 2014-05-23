(function (namespace) {
    function Map () {

        var $private = {};
        var $protected = this;
        var $public = $protected.constructor.prototype;

        return $protected;
    }

    VanillaLove.utils.Map = function () {
        return new Map();
    };

    return VanillaLove.utils.Map;
})(VanillaLove.utils);
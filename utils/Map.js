(function (namespace) {
    function Map () {

        var $private = {};
        var $protected = this;
        var $public = $protected.constructor.prototype;

        $public.isValid = function (map) {
            if (!map) {
                return false;
            }
            if (map instanceof Array === false) {
               return false;
            }
            if (!map[0] instanceof Object) {
                return false;
            }
            return true;
        };

        return $protected;
    }

    VanillaLove.utils.Map = function () {
        return new Map();
    };

    return VanillaLove.utils.Map;
})(VanillaLove.utils);
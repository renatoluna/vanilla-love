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

        $public.sort = function (map, key) {
            if (!$public.isValid()) {
                return;
            }

            var compare = function (a, b) {
                var key = key || Object.keys(map[0])[0];
                if (a[key] < b[key]){
                   return -1;
                }
                if (a[key] > b[key]){
                  return 1;
                }
                return 0;
            };
            return map.sort(compare);
        };

        return $protected;
    }

    VanillaLove.utils.Map = function () {
        return new Map();
    };

    return VanillaLove.utils.Map;
})(VanillaLove.utils);
(function (namespace) {
    function Arr () {

        var $private = {},
        $protected = this,
        $public = $protected.constructor.prototype;

        $public.isValid = function (array) {
            if (!array) {
                return false;
            }
            if (array instanceof Array === false) {
               return false;
            }
            return true;
        };

        $public.clean = function (arr) {
            var res = [],
            i = 0,
            length = arr.length;
            if(!$public.isValid()) {
                return;
            }
            for (var i = 0, length = arr.length; i < length; i++) {
                if (arr[i].length) {
                    res.push(arr[i]);
                }
            }
            return res;
        };

        return $protected;
    }

    VanillaLove.utils.Arr = function () {
        return new Arr();
    };

    return VanillaLove.utils.Arr;
})(VanillaLove.utils);

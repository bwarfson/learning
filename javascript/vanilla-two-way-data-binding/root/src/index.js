(function() {

    var elements = document.querySelectorAll('[data-tw-bind]'),
    scope = {};

    //console.log(elements);

    elements.forEach(function(element) {
        if (element.type === 'text' || element.type === 'textarea') {
            var propToBind = element.getAttribute('data-tw-bind');
            addScopeProp(propToBind);
            element.onkeyup = function() {
                scope[propToBind] = element.value;
                console.log(scope);
            }
        }
    });

    function addScopeProp(prop) {
        console.log(prop);
        if (!scope.hasOwnProperty(prop)) {
            var value;
            
            Object.defineProperty(scope, prop, {
                set: function(newValue) {
                    elements.forEach(function(element) {
                        if (element.getAttribute('data-tw-bind') === prop) {
                            if (element.type && (element.type === 'text' || element.type === 'textarea')) {
                                element.value = newValue;
                            }
                            else if (!element.type) {
                                element.innerHTML = newValue;
                            }
                        }
                    });
                },
                get: function() {
                    return value
                },
                enumerable: true
            });
        }
    }

    console.log(scope);

})();
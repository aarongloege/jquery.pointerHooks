(function($) {
    'use strict';

    // events to fix
    var events = [
        'pointerenter',
        'pointerover',
        'pointerdown',
        'pointermove',
        'pointerup',
        'pointerout',
        'pointerleave',
        'pointercancel'
    ];

    var fixHook = {
        // properties to copy over to jQuery Event
        props: [
            'pageX',
            'pageY',
            'clientX',
            'clientY',
            'screenX',
            'screenY',
            'relatedTarget',
            'pointerId',
            'pointerType',
            'x',
            'y',
            'isPrimary',
            'width',
            'height',
            'tiltX',
            'tiltY',
            'pressure'
        ]
    };

    var i = 0;
    var length = events.length;

    for (; i < length; i++) {
        $.event.fixHooks[events[i]] = fixHook;
    }

}(jQuery));
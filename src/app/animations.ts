import { animate, state, style, transition, trigger } from "@angular/animations";

export const enterPositionFromDown = trigger('enterPositionFromDown', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)'
        }), animate(500, style({
            transform: 'translateY(0)'
        }))
    ])
])
export const enterPositionFromUp = trigger('enterPositionFromUp', [
    transition(':enter', [
        style({
            transform: 'translateY(100%)'
        }), animate(500, style({
            transform: 'translateY(0)'
        }))
    ])
])
export const leavePositionUp = trigger('leavePositionUp', [
    transition(':leave', [
        style({
            transform: 'translateY(0)',
            position: 'absolute',
            minWidth: '100%'
        }), animate(500, style({
            transform: 'translateY(-100%)',
            position: 'absolute',
            minWidth: '100%'

        }))
    ])
])
export const leavePositionDown = trigger('leavePositionDown', [
    transition(':leave', [
        style({
            transform: 'translateY(100%)',
            position: 'absolute',
            minWidth: '100%'

        }), animate(500, style({
            transform: 'translateY(200%)',
            position: 'absolute',
            minWidth: '100%'

        }))
    ])
])
export const enterFromLeft = trigger('enterFromLeft', [
    transition(':enter', [
        style({
            transform: 'translateX(-100%)'
        }), animate(500, style({
            transform: 'translateX(0)'
        }))
    ])
])
export const slide = trigger('slide', [
    state('left', style({
        transform: 'translateX(-100%)'
    })),
    state('middle', style({
        transform: 'translateX(0)'
    })),
    state('middle-absolute', style({
        transform: 'translateX(0)',
        position: 'absolute'
    })),
    state('right-absolute', style({
        transform: 'translateX(100%)',
        position: 'absolute'
    })),
    transition('left => middle', animate(500)),
    transition('middle-absolute => right-absolute', animate(500)),
])

/**
 * @module Constants
 * @for Constants
 */
define(function(require) {

  var PI = Math.PI;

  return {

    // ENVIRONMENT
    ARROW: 'default',
    CROSS: 'crosshair',
    HAND: 'pointer',
    MOVE: 'move',
    TEXT: 'text',
    WAIT: 'wait',

    // TRIGONOMETRY

    /**
     * HALF_PI is a mathematical constant with the value 1.57079632679489661923. It is half the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().
     *
     * @property HALF_PI
     */
    HALF_PI: PI / 2,
    /**
     * PI is a mathematical constant with the value 3.14159265358979323846. It is the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().
     *
     * @property PI
     */
    PI: PI,
    /**
     * QUARTER_PI is a mathematical constant with the value 0.7853982. It is one quarter the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().
     *
     * @property QUARTER_PI
     */
    QUARTER_PI: PI / 4,
    /**
     * TAU is an alias for TWO_PI, a mathematical constant with the value 6.28318530717958647693. It is twice the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().
     *
     * @property TAU
     */
    TAU: PI * 2,
    /**
     * TWO_PI is a mathematical constant with the value 6.28318530717958647693. It is twice the ratio of the circumference of a circle to its diameter. It is useful in combination with the trigonometric functions sin() and cos().
     *
     * @property TWO_PI
     */
    TWO_PI: PI * 2,
    DEGREES: 'degrees',
    RADIANS: 'radians',

    // SHAPE
    CORNER: 'corner',
    CORNERS: 'corners',
    RADIUS: 'radius',
    RIGHT: 'right',
    LEFT: 'left',
    CENTER: 'center',
    POINTS: 'points',
    LINES: 'lines',
    TRIANGLES: 'triangles',
    TRIANGLE_FAN: 'triangles_fan',
    TRIANGLE_STRIP: 'triangles_strip',
    QUADS: 'quads',
    QUAD_STRIP: 'quad_strip',
    CLOSE: 'close',
    OPEN: 'open',
    CHORD: 'chord',
    PIE: 'pie',
    PROJECT: 'square', // PEND: careful this is counterintuitive
    SQUARE: 'butt',
    ROUND: 'round',
    BEVEL: 'bevel',
    MITER: 'miter',

    // COLOR
    RGB: 'rgb',
    HSB: 'hsb',

    // DOM EXTENSION
    AUTO: 'auto',

    // TYPOGRAPHY
    NORMAL: 'normal',
    ITALIC: 'italic',
    BOLD: 'bold',

    // VERTICES
    LINEAR: 'linear',
    QUADRATIC: 'quadratic',
    BEZIER: 'bezier',
    CURVE: 'curve'

  };

});

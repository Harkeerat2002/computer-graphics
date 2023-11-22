//------------ Assignment ----------------
// Add vertices for the cube as well as colors for corresponding vertices.
// Remember that:
// (1) The vertices for each triangle has to be provided in a counter-clockwise order to make the face culling work properly. If the order of vertices won't be correct the triangles won't be visible.
// (2) The current coordinate system has: x-axis pointing right, y-axis pointing up, and z-axis pointing towards the screen
// (3) Everything which is within [-1..1]x[-1..1]x[-1..1] volume will be projected onto the screen along z-axis
//-----------------------------------------

var cube_vertices = [
    // FRONT
    -0.5, -0.5, 0.5,
    0.5, -0.5, 0.5,
    -0.5, 0.5, 0.5,

    -0.5, 0.5, 0.5,
    0.5, -0.5, 0.5,
    0.5, 0.5, 0.5,
    
    //BACK
    -0.5, -0.5, -0.5,
    -0.5, 0.5, -0.5,
    0.5, -0.5, -0.5,

    0.5, -0.5, -0.5,
    -0.5, 0.5, -0.5,
    0.5, 0.5, -0.5,

    //RIGHT
    0.5, -0.5, 0.5,
    0.5, -0.5, -0.5,
    0.5, 0.5, 0.5,

    0.5, 0.5, 0.5,
    0.5, -0.5, -0.5,
    0.5, 0.5, -0.5,

    //LEFT
    -0.5, -0.5, 0.5,
    -0.5, 0.5, 0.5,
    -0.5, -0.5, -0.5,

    -0.5, -0.5, -0.5,
    -0.5, 0.5, 0.5,
    -0.5, 0.5, -0.5,

    //UP
    -0.5, 0.5, 0.5,
    0.5, 0.5, 0.5,
    -0.5, 0.5, -0.5,

    0.5, 0.5, 0.5,
    0.5, 0.5, -0.5,
    -0.5, 0.5, -0.5,

    //DOWN
    -0.5, -0.5, -0.5,
    0.5, -0.5, 0.5,
    -0.5, -0.5, 0.5,

    -0.5, -0.5, -0.5,
    0.5, -0.5, -0.5,
    0.5, -0.5, 0.5

];

var cube_colors = [
    //Red Front:
    0.83,0.29,0.27,
    0.83,0.29,0.27,
    0.83,0.29,0.27,

    0.83,0.29,0.27,
    0.83,0.29,0.27,
    0.83,0.29,0.27,

    //Pink Back:
    0.69,0.16,0.68,
    0.69,0.16,0.68,
    0.69,0.16,0.68,

    0.69,0.16,0.68,
    0.69,0.16,0.68,
    0.69,0.16,0.68,

    //Blue Right:
    0.27,0.6,0.85,
    0.27,0.6,0.85,
    0.27,0.6,0.85,

    0.27,0.6,0.85,
    0.27,0.6,0.85,
    0.27,0.6,0.85,

    //Yellow Left:
    0.85,0.75,0.27,
    0.85,0.75,0.27,
    0.85,0.75,0.27,

    0.85,0.75,0.27,
    0.85,0.75,0.27,
    0.85,0.75,0.27,

    //Green Up:
    0.46,0.76,0.23,
    0.46,0.76,0.23,
    0.46,0.76,0.23,

    0.46,0.76,0.23,
    0.46,0.76,0.23,
    0.46,0.76,0.23,

    //White Down:
    1.0,1.0,1.0,
    1.0,1.0,1.0,
    1.0,1.0,1.0,

    1.0,1.0,1.0,
    1.0,1.0,1.0,
    1.0,1.0,1.0,

];
// vertices of our traingle
var triangle_vertices = [
    0.0,  0.5,  0.0,
   -0.5, -0.5,  0.0,
    0.5, -0.5,  0.0,
];

//---------------- Assignment -------------------
    // Define color for each vertex of a triangle.
    // The vertices should have different colors, e.g., reg, green, blue.
    // The colors within the triangle will be interpolated automaticaly.
//----------------------------------------------
var triangle_colors = [
    //Green:
    0.46,0.75,0.22, 
    //Red:
    0.71,0.27,0.25, 
    //Blue:
    0.27,0.6,0.83 
];

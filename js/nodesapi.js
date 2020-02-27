window.onload = function() {
    var canv = document.getElementById("canvas");
    var ctx = canv.getContext("2d");
    var width = canv.width = window.innerwidth;
    var height = canv.height = window.innerheight;
    var collisionBounds = {
        x: width / 2.0,
        y: height / 2.0,
        w: 50,
        h: 90
    };

    //DECLARE NEW NODE AND DRAW IT!
    var Node1 = new GraphNode(0, "Add", "MATH", ["MATH", "MATH"], ["MATH"], 250, 250, ctx);
};

/*
* Base class for a scripting node.
* 
* Parameters:
* id: The index number of the node.
* name: The name of the node that is displayed at the top (indicative of what code the node runs).
* type: The type of the node (determines node color).
* input: Parameters (if any) that the node's function takes in.
* output: Results (if any) that the node's function returns.
* x: The x-position of the top-left corner of the node.
* y: The y-position of the top-left corner of the node.
* ctx: The context variable of the canvas.
*/
class GraphNode
{
    constructor(id, name, type, input, output, x, y, ctx)
    {
        this.id = id;
        this.name = name;
        this.type = type;
        this.input = input;
        this.output = output;
        this.x = x;
        this.y = y;
        this.ctx = ctx;
    }

    //Global variables:

    //Width of the node:
    width = 25 + (5 * name.length);
    //Height of the node:
    height = 65 + (16 * Math.max(this.input.length, this.output.length));
    //Width of the canvas/viewport:
    vw = window.innerwidth;
    //Height of the canvas/viewport:
    vh = window.innerheight;
    //Fill color of a node:
    nodeFill = "rgb(225, 225, 225)";
    setTheme(){if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches){nodeFill = "rgb(10, 10, 10)";}};

    //Draw the box that makes up the node, the name, and its input and output pins.
    draw() {
        this.ctx.clearRect(0, 0, vw, vh); //Clear screen
        this.ctx.fillStyle = nodeFill;
        this.ctx.fillRect(this.x, this.y, width, height);
        
    }
}
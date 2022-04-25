"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp = require('sharp');
const app = (0, express_1.default)();
const port = 5000;
// Data(array) of the images
const imageName = [
    "encenadaport",
    "fjord",
    "icelandwaterfall",
    "palmtunnel",
    "santamonica",
];
// to get access to static files
app.use(`/images/`, express_1.default.static(__dirname + "/images"));
app.use(`/resized/`, express_1.default.static(__dirname + "/resized"));
// MAIN PAGE
app.get("/", (req, res) => {
    res.send("MAIN PAGE ");
});
// IMAGE resizing & replacing old img & redirected to (resized folder) & get access to all imges oraginal imge & resized
app.get("/images", (req, res) => {
    const p = req.query.name;
    const w = Number(req.query.width);
    const h = Number(req.query.height);
    let x = 0;
    // handling if the image out of the library
    void (imageName.map((n) => {
        if (n === p) {
            x = 1;
        }
    }));
    //if width or height does't exsist give them constant value
    if (x == 1 && Number.isInteger(w) && Number.isInteger(h)) {
        if (Math.sign(w) == 1 && Math.sign(h) == 1) {
            sharp(`./images/${p}.jpg`)
                .resize(Number(w), Number(h))
                .toFile(`./resized/${p}.jpg`);
            res.redirect(`/resized/${p}.jpg`);
        }
        else {
            res.send("you sent negative height or negative width");
        }
    }
    else {
        res.send("you sent wrong data");
    }
});
app.listen(port, () => {
    console.log("listening on port");
});
exports.default = app;

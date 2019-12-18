"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
exports.expressApp = express();
exports.expressApp.get('/', (req, res) => {
    const response = { message: 'Hello 3SU' };
    res.send(response);
});
exports.expressApp.get('/name', (req, res) => {
    const response = { myName: "Quoc Bao" };
    res.send(response);
});
function start(port = 3000) {
    exports.expressApp.listen(port, (err) => {
        if (err) {
            console.error(`Unable to start app. Found error: ${err.message}`);
            return;
        }
        console.info(`Example app listening on port ${port}!`);
    });
}
exports.start = start;
//# sourceMappingURL=app.js.map
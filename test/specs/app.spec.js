"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("@/app");
describe('app', () => {
    const consoleInfoSpy = jest.spyOn(console, 'info').mockImplementation();
    const consoleErrorSpy = jest.spyOn(console, 'error').mockImplementation();
    afterEach(() => {
        consoleInfoSpy.mockClear();
        consoleErrorSpy.mockClear();
    });
    test('starts the app without errors', () => {
        jest.spyOn(app_1.expressApp, 'listen').mockImplementationOnce((_, listeningListener) => {
            listeningListener(false);
            return 'serverWithoutErrors';
        });
        app_1.start();
        expect(consoleInfoSpy).toBeCalledWith('Example app listening on port 3000!');
        expect(consoleErrorSpy).not.toBeCalled();
    });
    test('starts the app and stops with the error', () => {
        const errorMessage = 'mocked error';
        jest.spyOn(app_1.expressApp, 'listen').mockImplementationOnce((_, listeningListener) => {
            listeningListener(new Error(errorMessage));
            return 'serverWithErrors';
        });
        app_1.start();
        expect(consoleInfoSpy).not.toBeCalled();
        expect(consoleErrorSpy).toBeCalledWith(`Unable to start app. Found error: ${errorMessage}`);
    });
});
//# sourceMappingURL=app.spec.js.map
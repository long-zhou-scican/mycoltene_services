export async function hello(event) {
    return {
        message: `Hello ${event.body}, welcome to the exciting Serverless world!`,
        event,
    };
}
;
//# sourceMappingURL=handler.js.map
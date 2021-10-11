const Sentry = require("@sentry/node");
const Tracing = require("@sentry/tracing");

Sentry.init({

    dsn: "https://10ff89a5ea3f40aeb3c277db44cf4f1b@o1035132.ingest.sentry.io/6001898",
    traceSampleRate: 1.0
});

const transaction = Sentry.startTransaction({
    op: "test",
    name: "My First Test Transaction",
});

setTimeout(() => {
    try {
        foo();
    } catch (e) {
        Sentry.captureException(e);
    } finally {
        transaction.finish();
    }
}, 99);

const { createLogger, transports, format } = require("winston");
const { combine, timestamp, errors } = format;
const DiscordTransport = require('winston-discord-transport').default;
const SlackHook = require("winston-slack-webhook-transport");

function buildProdLogger() {
    return createLogger({
        format: combine(
            timestamp(),
            errors({ stack: true }),
            json()
        ),
        defaultMeta: { service: 'user-service' },
        transports: [
            // new transports.File({ filename: 'logs/error.log', level: 'error' }),
            // new transports.File({ filename: 'logs/combined.log' }),

            new DiscordTransport({
                webhook: "https://discord.com/api/webhooks/897084968092700732/kviiNnDgTHzS_xSrlvnqFhOWW8M3-EE3xu_JkrtN1qko3JauZ1xNHfSPv8NtCNYC6YkZ",
                defaultMeta: { service: "my_discord_service" },
                level: "warn"
            }),

            new SlackHook({
                webhook: "https://discord.com/api/webhooks/897084968092700732/kviiNnDgTHzS_xSrlvnqFhOWW8M3-EE3xu_JkrtN1qko3JauZ1xNHfSPv8NtCNYC6YkZ",

            })
        ]
    })
};

module.exports = buildProdLogger();

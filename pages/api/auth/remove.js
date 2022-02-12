export default async function handler(req, res) {
    res.setHeader(
        "Set-Cookie",
        [
            "sb-access-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
            "sb-refresh-token=deleted; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT",
        ]
    );
    res.send({});
}

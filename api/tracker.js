export default function handler(req, res) {
  const ip = req.headers["x-forwarded-for"] || req.socket.remoteAddress;
  const userAgent = req.headers["user-agent"] || "unknown";
  const time = new Date().toISOString();

  console.log(`📬 Email Opened at ${time} from IP ${ip} using ${userAgent}`);

  const pixel = Buffer.from(
    "R0lGODlhAQABAIABAP///wAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==",
    "base64"
  );

  res.setHeader("Content-Type", "image/gif");
  res.setHeader("Cache-Control", "no-store");
  res.status(200).send(pixel);
}

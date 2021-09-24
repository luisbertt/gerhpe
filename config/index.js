const dev = process.env.NODE_ENV !== "production"

export const hostname = dev ? "http://localhost:3000" : "https://gerhpe.com"

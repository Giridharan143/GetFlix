import { PrismaClient } from "@prisma/client";

const client = global.prismadb || new PrismaClient();

if(process.env.NODE_ENV === 'production') global.prismadb = client;

export default client;

// This is part is mainly used for solving the issues which are caused by the Hot Reload in the Next.js Framework
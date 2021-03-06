CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "profileImg" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "sessions" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "token" TEXT NOT NULL,
    "isValid" BOOLEAN NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "kanjis" (
    "id" SERIAL PRIMARY KEY,
    "kanji" TEXT NOT NULL UNIQUE,
    "grade" SMALLINT NOT NULL,
    "createdAt" TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "usersKanjis"(
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "kanjiId" INTEGER NOT NULL REFERENCES "kanjis"("id"),
    "points" INTEGER NOT NULL DEFAULT 0,
    "createdAt" TIMESTAMP DEFAULT NOW()
);
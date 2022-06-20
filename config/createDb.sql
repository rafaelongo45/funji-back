CREATE TABLE "users" (
    "id" SERIAL PRIMARY KEY,
    "username" TEXT NOT NULL,
    "email" TEXT UNIQUE NOT NULL,
    "profileImg" TEXT NOT NULL,
    "password" TEXT NOT NULL
);

CREATE TABLE "points" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "points" INTEGER NOT NULL DEFAULT 0,
    createdAt TIMESTAMP DEFAULT NOW()
);

CREATE TABLE "sessions" (
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "token" TEXT NOT NULL,
    "isValid" BOOLEAN NOT NULL
);

CREATE TABLE "memKanji" (
    "id" SERIAL PRIMARY KEY,
    "kanji" TEXT NOT NULL
);

CREATE TABLE "userMemKanji"(
    "id" SERIAL PRIMARY KEY,
    "userId" INTEGER NOT NULL REFERENCES "users"("id"),
    "memKanjiId" INTEGER NOT NULL REFERENCES "memKanji"("id")
);
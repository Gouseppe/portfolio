import { atom } from "nanostores";

export type Lang = "en" | "es";

export const lang = atom<Lang>("es");

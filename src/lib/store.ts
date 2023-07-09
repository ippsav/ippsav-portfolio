import { writable } from "svelte/store";
import type { Theme } from "./types/shared";



export const theme = writable<Theme>("dark");

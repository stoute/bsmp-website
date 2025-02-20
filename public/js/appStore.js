import { atom, map } from "/node_modules/nanostores";

export const isLoggedIn = atom(false);

/**
 * @typedef {Object} AppState
 * @property {string} environment
 * @property {string} imageSrc
 * @property {number} quantity
 */

/** @type {import('nanostores').MapStore<Record<string, AppState>>} */
export const appState = map({});

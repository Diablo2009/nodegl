/// <reference path="./types/gl.d.ts"/>

import { ExportValue } from "./types/index";

declare const calls;
declare const constants;

export = {...calls,...constants} as ExportValue;
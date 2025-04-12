/// <reference path="gl.d.ts"/>

import * as GLTypes from "./gl";

import { Calls as calls } from "./calls";
import { Constants } from "./constants";

export interface Calls extends calls<GLTypes.GLenum, GLTypes.GLboolean, GLTypes.GLbitfield, GLvoid, GLbyte, GLshort, GLTypes.GLint, GLubyte, GLushort, GLTypes.GLuint, GLTypes.GLsizei, GLTypes.GLfloat, GLTypes.GLclampf, GLTypes.GLdouble, GLTypes.GLclampd> {}

export interface ExportValue extends Calls,Constants {}
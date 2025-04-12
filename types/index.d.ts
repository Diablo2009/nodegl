/// <reference path="gl.d.ts"/>

import * as GLTypes from "./gl";

import { Calls as calls } from "./calls";
import { Constants } from "./constants";

export interface Calls extends calls<GLTypes.GLenum, GLTypes.GLboolean, GLTypes.GLbitfield, GLTypes.GLvoid, GLTypes.GLbyte, GLTypes.GLshort, GLTypes.GLint, GLTypes.GLubyte, GLTypes.GLushort, GLTypes.GLuint, GLTypes.GLsizei, GLTypes.GLfloat, GLTypes.GLclampf, GLTypes.GLdouble, GLTypes.GLclampd> {}

export interface ExportValue extends Calls,Constants {}
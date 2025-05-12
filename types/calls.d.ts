// Documentation Source: https://docs.gl

interface CallsBase<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd> {}

export interface CallsMisc<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    /**
     * `glClearIndex` specifies the index used by glClear to clear the color index buffers. c is not clamped. Rather, c is converted to a fixed-point value with unspecified precision to the right of the binary point. The integer part of this value is then masked with 2m−1, where m is the number of bits in a color index stored in the frame buffer.
     */
    glClearIndex ( c : GLfloat ) : void;
    /** 
     * `glClearColor` specifies the red, green, blue, and alpha values used by glClear to clear the color buffers. Values specified by glClearColor are clamped to the range [0,1]. 
    */
    glClearColor ( red : GLclampf, green : GLclampf, blue : GLclampf, alpha : GLclampf ) : void;
    /**
     *  `glClear` sets the bitplane area of the window to values previously selected by `glClearColor`, `glClearIndex`, `glClearDepth`, `glClearStencil`, and `glClearAccum`. Multiple color buffers can be cleared simultaneously by selecting more than one buffer at a time using glDrawBuffer.
     *
     *  The pixel ownership test, the scissor test, dithering, and the buffer writemasks affect the operation of glClear. The scissor box bounds the cleared region. Alpha function, blend function, logical operation, stenciling, texture mapping, and depth-buffering are ignored by glClear.
     *
     *  glClear takes a single argument that is the bitwise OR of several values indicating which buffer is to be cleared.
     *
     *  The values are as follows:
     *
     *  GL_COLOR_BUFFER_BIT
     *
     *    Indicates the buffers currently enabled for color writing. 
     *  GL_DEPTH_BUFFER_BIT
     *
     *    Indicates the depth buffer. 
     *  GL_ACCUM_BUFFER_BIT
     *
     *    Indicates the accumulation buffer. 
     *  GL_STENCIL_BUFFER_BIT
     *
     *    Indicates the stencil buffer. 
     *
     * The value to which each buffer is cleared depends on the setting of the clear value for that buffer. 
     */
    glClear ( mask : GLbitfield ) : void;
    /**
     * `glIndexMask` controls the writing of individual bits in the color index buffers. The least significant *n* bits of `mask`, where *n*
     * is the number of bits in a color index buffer, specify a mask. Where a 1 (one) appears in the mask, it's possible to write to the corresponding bit in the color index buffer (or buffers). Where a 0 (zero) appears, the corresponding bit is write-protected.
     *
     * This mask is used only in color index mode, and it affects only the buffers currently selected for writing (see glDrawBuffer). Initially, all bits are enabled for writing. 
     */
    glIndexMask ( mask : GLuint ) : void;
    /**
     *  `glColorMask` specifies whether the individual color components in the frame buffer can or cannot be written. If *red* is GL_FALSE, for example, no change is made to the red component of any pixel in any of the color buffers, regardless of the drawing operation attempted.
     * 
     * Changes to individual bits of components cannot be controlled. Rather, changes are either enabled or disabled for entire color components. 
     */
    glColorMask ( red : GLboolean, green : GLboolean, blue : GLboolean, alpha : GLboolean ) : void;
    /**
     *  The alpha test discards fragments depending on the outcome of a comparison between an incoming fragment's alpha value and a constant reference value. `glAlphaFunc` specifies the reference value and the comparison function. The comparison is performed only if alpha testing is enabled. By default, it is not enabled. (See glEnable and glDisable of GL_ALPHA_TEST.)

     * *func* and *ref* specify the conditions under which the pixel is drawn. The incoming **alpha** value is compared to *ref* using the function specified by *func*. If the value passes the comparison, the incoming fragment is drawn if it also passes subsequent stencil and depth buffer tests. If the value fails the comparison, no change is made to the frame buffer at that pixel location. The comparison functions are as follows:
     * 
     * GL_NEVER
     * 
     *    Never passes.
     * 
     * GL_LESS
     * 
     *    Passes if the incoming alpha value is less than the reference value. 
     * 
     * GL_EQUAL
     * 
     *    Passes if the incoming alpha value is equal to the reference value. 
     * 
     * GL_LEQUAL
     * 
     *    Passes if the incoming alpha value is less than or equal to the reference value. 
     * 
     * GL_GREATER
     * 
     *    Passes if the incoming alpha value is greater than the reference value. 
     * 
     * GL_NOTEQUAL
     * 
     *     Passes if the incoming alpha value is not equal to the reference value. 
     * 
     * GL_GEQUAL
     * 
     *     Passes if the incoming alpha value is greater than or equal to the reference value. 
     * 
     * GL_ALWAYS
     * 
     *     Always passes (initial value). 
     * 
     * glAlphaFunc operates on all pixel write operations, including those resulting from the scan conversion of points, lines, polygons, and bitmaps, and from pixel draw and copy operations. glAlphaFunc does not affect screen clear operations. 
     */
    glAplhaFunc ( func : GLenum, ref: GLclampf) : void;
    /**
     * specify pixel arithmetic
     * @link https://docs.gl/gl2/glBlendFunc
     */
    glBlendFunc ( sFactor : GLenum, dFactor : GLenum ) : void;
    /**
     * Please use the web documentation for reference.
     * @link https://docs.gl/gl2/glLogicOp
     */
    glLogicOp ( opcode : GLenum ) : void;
    /**
     * `glCullFace` specifies whether front- or back-facing facets are culled (as specified by mode) when facet culling is enabled. Facet culling is initially disabled. To enable and disable facet culling, call the glEnable and glDisable commands with the argument GL_CULL_FACE. Facets include triangles, quadrilaterals, polygons, and rectangles.
     * 
     * glFrontFace specifies which of the clockwise and counterclockwise facets are front-facing and back-facing. See glFrontFace. 
     */
    glCullFace ( mode : GLenum ) : void;
    glFrontFace ( mode : GLenum ) : void;
    glPointSize ( size : GLfloat ) : void;
    glLineWidth ( width : GLfloat ) : void;
    glLineStipple ( factor : GLint, pattern : GLushort ) : void;
    glPolygonMode ( face : GLenum, mode : GLenum ) : void;
    glPolygonOffset ( factor : GLfloat, units : GLfloat ) : void;
    glPolygonStipple ( mask : GLubyte ) : void;
    glGetPolygonStipple ( mask : GLubyte ) : void;
    glEdgeFlag ( flag : GLboolean ) : void;
    glEdgeFlagv ( flag : GLboolean ) : void;
    glScissor ( x : GLint, y : GLint, width : GLsizei, height : GLsizei) : void;
    glClipPlane ( plane : GLenum, equation : GLdouble ) : void;
    glGetClipPlane ( plane : GLenum, equation : GLdouble ) : void;
    glDrawBuffer ( mode : GLenum ) : void;
    glReadBuffer ( mode : GLenum ) : void;
    glEnable ( cap : GLenum ) : void;
    glDisable ( cap : GLenum ) : void;
    glIsEnable ( cap : GLenum ) : GLboolean;
    glGetBooleanv ( pname : GLenum, params : GLboolean ) : void;
    glGetDoublev ( pname : GLenum, params : GLdouble ) : void;
    glGetFloatv ( pname : GLenum, params : GLfloat ) : void;
    glGetIntegerv ( pname : GLenum, params : GLint ) : void;
    glPushAttrib ( mask : GLbitfield ) : void;
    glPopAttrib ( ) : void;
    glRenderMode ( mode : GLenum ) : GLint;
    glGetError ( ) : GLenum;
    glGetString ( name : GLenum ) : GLubyte;
    glFinish ( ) : void;
    glFlush ( ) : void;
    glHint ( target : GLenum, mode : GLenum ) : void;
}

export interface CallsDepthBuffer<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glClearDepth ( depth : GLclampd ) : void;
    glDepthFunc ( func : GLenum ) : void;
    glDepthMask ( flag : GLboolean ) : void;
    glDepthRange ( near_val : GLclampd, far_val : GLclampd ) : void;
}

export interface CallsAccumulationBuffer<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glClearAccum ( red : GLfloat, green : GLfloat, blue : GLfloat, alpha : GLfloat ) : void;
    glAccum ( op : GLenum, value : GLfloat ) : void;
}

export interface CallsTransofrmation<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glMatrixMode ( mode : GLenum ) : void;
    glOrtho ( left : GLdouble, right : GLdouble, bottom : GLdouble, top : GLdouble, near_val : GLdouble, far_val : GLdouble ) : void;
    glFrustum ( left : GLdouble, right : GLdouble, bottom : GLdouble, top : GLdouble, near_val : GLdouble, far_val : GLdouble ) : void;
    glViewport ( x : GLint, y : GLint, width : GLsizei, height : GLsizei ) : void;
    glPushMatrix ( ) : void;
    glPopMatrix ( ) : void;
    glLoadIdentity ( ) : void;
    glLoadMatrixd ( m : GLdouble ) : void;
    glLoadMatrixf ( m : GLfloat ) : void;
    glMultMatrixd ( m : GLdouble ) : void;
    glMultiMatrixf ( m : GLfloat ) : void;
    glRotated ( angle : GLdouble, x : GLdouble, y : GLdouble, z : GLdouble ) : void;
    glRotatef ( angle : GLfloat, x : GLfloat, y : GLfloat, z : GLfloat ) : void;
    glScaled ( x : GLdouble, y : GLdouble, z : GLdouble ) : void;
    glScalef ( x : GLfloat, y : GLfloat, z : GLfloat ) : void;
    glTranslated ( x : GLdouble, y : GLdouble, z : GLdouble ) : void;
    glTranslatef ( x : GLfloat, y : GLfloat, z : GLfloat ) : void;
}

export interface CallsDisplayList<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glIsList ( list : GLuint ) : GLboolean;
    glDeleteLists ( list : GLuint, range : GLsizei ) : void;
    glGenLists ( range : GLsizei ) : GLuint;
    glNewlist ( list : GLuint, mode : GLenum ) : void;
    glEndList ( ) : void;
    glCallList ( list : GLuint ) : void;
    glCallLists ( n : GLsizei, type : GLenum, lists : GLvoid): void;
    glListBase ( base : GLuint ) : void;
}

export interface CallsDrawing<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glBegin ( mode : GLenum ) : void;
    glEnd ( ) : void;

    glVertex2d ( x : GLdouble, y : GLdouble ) : void;
    glVertex2f ( x : GLfloat, y : GLfloat ) : void;
    glVertex2i ( x : GLint, y : GLint ) : void;
    glVertex2s ( x : GLshort, y : GLshort ) : void;

    glVertex3d ( x : GLdouble, y : GLdouble, z : GLdouble ) : void;
    glVertex3f ( x : GLfloat, y : GLfloat, z : GLfloat ) : void;
    glVertex3i ( x : GLint, y : GLint, z : GLint ) : void;
    glVertex3s ( x : GLshort, y : GLshort, z : GLshort ) : void;

    glVertex4d ( x : GLdouble, y : GLdouble, z : GLdouble, w : GLdouble ) : void;
    glVertex4f ( x : GLfloat, y : GLfloat, z : GLfloat, w : GLfloat ) : void;
    glVertex4i ( x : GLint, y : GLint, z : GLint, w : GLint ) : void;
    glVertex4s ( x : GLshort, y : GLshort, z : GLshort, w : GLshort ) : void;
    
    glVertex2dv ( v : GLdouble ) : void;
    glVertex2fv ( v : GLfloat ) : void;
    glVertex2iv ( v : GLint ) : void;
    glVertex2sv ( v : GLshort ) : void;
    
    glVertex3dv ( v : GLdouble ) : void;
    glVertex3fv ( v : GLfloat ) : void;
    glVertex3iv ( v : GLint ) : void;
    glVertex3sv ( v : GLshort ) : void;
    
    glVertex4dv ( v : GLdouble ) : void;
    glVertex4fv ( v : GLfloat ) : void;
    glVertex4iv ( v : GLint ) : void;
    glVertex4sv ( v : GLshort ) : void;
    
    glNormal3b ( nx : GLbyte, ny : GLbyte, nz : GLbyte ) : void;
    glNormal3d ( nx : GLdouble, ny : GLdouble, nz : GLdouble ) : void;
    glNormal3f ( nx : GLfloat, ny : GLfloat, nz : GLfloat ) : void;
    glNormal3i ( nx : GLint, ny : GLint, nz : GLint ) : void;
    glNormal3s ( nx : GLshort, ny : GLshort, nz : GLshort ): void;

    glNormal4bv ( v : GLbyte ) : void;
    glNormal4dv ( v : GLdouble ) : void;
    glNormal4fv ( v : GLfloat ) : void;
    glNormal4iv ( v : GLint ) : void;
    glNormal4sv ( v : GLshort ) : void;

    glIndexd ( c : GLdouble ) : void;
    glIndexf ( c : GLfloat ) : void;
    glIndexi ( c : GLint ) : void;
    glIndexs ( c : GLshort ) : void;

    glIndexdv ( c : GLdouble ) : void;
    glIndexfv ( c : GLfloat ) : void;
    glIndexiv ( c : GLint ) : void;
    glIndexsv ( c : GLshort ) : void;

    glColor3b ( red : GLbyte, green : GLbyte, blue : GLbyte ) : void;
    glColor3d ( red : GLdouble, green : GLdouble, blue : GLdouble ) : void;
    glColor3f ( red : GLfloat, green : GLfloat, blue : GLfloat ) : void;
    glColor3i ( red : GLint, green : GLint, blue : GLint ) : void;
    glColor3s ( red : GLshort, green : GLshort, blue : GLshort ) : void;
    glColor3ub ( red : GLubyte, green : GLubyte, blue : GLubyte ) : void;
    glColor3ui ( red : GLuint, green : GLuint, blue : GLuint ) : void;
    glColor3us ( red : GLushort, green : GLushort, blue : GLushort ) : void;

    glColor4b ( red : GLbyte, green : GLbyte, blue : GLbyte, alpha : GLbyte ) : void;
    glColor4d ( red : GLdouble, green : GLdouble, blue : GLdouble, alpha : GLdouble ) : void;
    glColor4f ( red : GLfloat, green : GLfloat, blue : GLfloat, alpha : GLfloat ) : void;
    glColor4i ( red : GLint, green : GLint, blue : GLint, alpha : GLint ) : void;
    glColor4s ( red : GLshort, green : GLshort, blue : GLshort, alpha : GLshort ) : void;
    glColor4ub ( red : GLubyte, green : GLubyte, blue : GLubyte, alpha : GLubyte ) : void;
    glColor4ui ( red : GLuint, green : GLuint, blue : GLuint, alpha : GLuint ) : void;
    glColor4us ( red : GLushort, green : GLushort, blue : GLushort, alpha : GLushort ) : void;

    glColor3bv ( v : GLbyte ) : void;
    glColor3dv ( v : GLdouble ) : void;
    glColor3fv ( v : GLfloat ) : void;
    glColor3iv ( v : GLint ) : void;
    glColor3sv ( v : GLshort ) : void;
    glColor3ubv ( v : GLubyte ) : void;
    glColor3uiv ( v : GLuint ) : void;
    glColor3usv ( v : GLushort ) : void;

    glColor4bv ( v : GLbyte ) : void;
    glColor4dv ( v : GLdouble ) : void;
    glColor4fv ( v : GLfloat ) : void;
    glColor4iv ( v : GLint ) : void;
    glColor4sv ( v : GLshort ) : void;
    glColor4ubv ( v : GLubyte ) : void;
    glColor4uiv ( v : GLuint ) : void;
    glColor4usv ( v : GLushort ) : void;

    glTexCoord1d ( s : GLdouble ) : void;
    glTexCoord1f ( s : GLfloat ) : void;
    glTexCoord1i ( s : GLint ) : void;
    glTexCoord1s ( s : GLshort ) : void;

    glTexCoord2d ( s : GLdouble, t: GLdouble ) : void;
    glTexCoord2f ( s : GLfloat, t: GLfloat ) : void;
    glTexCoord2i ( s : GLint, t: GLint ) : void;
    glTexCoord2s ( s : GLshort, t: GLshort ) : void;

    glTexCoord3d ( s : GLdouble, t: GLdouble, r : GLdouble ) : void;
    glTexCoord3f ( s : GLfloat, t: GLfloat, r : GLfloat ) : void;
    glTexCoord3i ( s : GLint, t: GLint, r : GLint ) : void;
    glTexCoord3s ( s : GLshort, t: GLshort, r : GLshort ) : void;

    glTexCoord4d ( s : GLdouble, t: GLdouble, r : GLdouble, q : GLdouble ) : void;
    glTexCoord4f ( s : GLfloat, t: GLfloat, r : GLfloat, q : GLfloat ) : void;
    glTexCoord4i ( s : GLint, t: GLint, r : GLint, q : GLint ) : void;
    glTexCoord4s ( s : GLshort, t: GLshort, r : GLshort, q : GLshort ) : void;

    glTexCoord1dv ( v : GLdouble ) : void;
    glTexCoord1fv ( v : GLfloat ) : void;
    glTexCoord1iv ( v : GLint ) : void;
    glTexCoord1sv ( v : GLshort ) : void;

    glTexCoord2dv ( v : GLdouble ) : void;
    glTexCoord2fv ( v : GLfloat ) : void;
    glTexCoord2iv ( v : GLint ) : void;
    glTexCoord2sv ( v : GLshort ) : void;

    glTexCoord13dv ( v : GLdouble ) : void;
    glTexCoord13fv ( v : GLfloat ) : void;
    glTexCoord13iv ( v : GLint ) : void;
    glTexCoord13sv ( v : GLshort ) : void;

    glTexCoord14dv ( v : GLdouble ) : void;
    glTexCoord14fv ( v : GLfloat ) : void;
    glTexCoord14iv ( v : GLint ) : void;
    glTexCoord14sv ( v : GLshort ) : void;

    glRasterPos2d ( x : GLdouble, y : GLdouble ) : void;
    glRasterPos2f ( x : GLfloat, y : GLfloat ) : void;
    glRasterPos2i ( x : GLint, y : GLint ) : void;
    glRasterPos2s ( x : GLshort, y : GLshort ) : void;
    
    glRasterPos3d ( x : GLdouble, y : GLdouble, z: GLdouble ) : void;
    glRasterPos3f ( x : GLfloat, y : GLfloat, z: GLfloat ) : void;
    glRasterPos3i ( x : GLint, y : GLint, z: GLint ) : void;
    glRasterPos3s ( x : GLshort, y : GLshort, z: GLshort ) : void;

    glRasterPos4d ( x : GLdouble, y : GLdouble, z: GLdouble, w : GLdouble ) : void;
    glRasterPos4f ( x : GLfloat, y : GLfloat, z: GLfloat, w : GLfloat ) : void;
    glRasterPos4i ( x : GLint, y : GLint, z: GLint, w : GLint ) : void;
    glRasterPos4s ( x : GLshort, y : GLshort, z: GLshort, w : GLshort ) : void;

    glRasterPos2dv ( v : GLdouble ) : void;
    glRasterPos2fv ( v : GLfloat ) : void;
    glRasterPos2iv ( v : GLint ) : void;
    glRasterPos2sv ( v : GLshort ) : void;

    glRasterPos3dv ( v : GLdouble ) : void;
    glRasterPos3fv ( v : GLfloat ) : void;
    glRasterPos3iv ( v : GLint ) : void;
    glRasterPos3sv ( v : GLshort ) : void;

    glRasterPos4dv ( v : GLdouble ) : void;
    glRasterPos4fv ( v : GLfloat ) : void;
    glRasterPos4iv ( v : GLint ) : void;
    glRasterPos4sv ( v : GLshort ) : void;

    glRectd ( x1 : GLdouble, y1 : GLdouble, x2 : GLdouble, y2 : GLdouble ) : void;
    glRectf ( x1 : GLfloat, y1 : GLfloat, x2 : GLfloat, y2 : GLfloat ) : void;
    glRecti ( x1 : GLint, y1 : GLint, x2 : GLint, y2 : GLint ) : void;
    glRects ( x1 : GLshort, y1 : GLshort, x2 : GLshort, y2 : GLshort ) : void;

    glRectdv ( v1 : GLdouble, v2 : GLdouble ) : void;
    glRectfv ( v1 : GLfloat, v2 : GLfloat ) : void;
    glRectiv ( v1 : GLint, v2 : GLint ) : void;
    glRectsv ( v1 : GLshort, v2 : GLshort ) : void;
}

export interface CallsLighting<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glShadeModel ( mode : GLenum ) : void;
    
    glLightf ( light : GLenum, pname : GLenum, params : GLfloat ) : void;
    glLighti ( light : GLenum, pname : GLenum, params : GLint ) : void;
    glLightfv ( light : GLenum, pname : GLenum, params : GLfloat ) : void;
    glLightiv ( light : GLenum, pname : GLenum, params : GLint ) : void;

    glGetLightfv ( light : GLenum, pname : GLenum, params : GLfloat ) : void;
    glGetLightiv ( light : GLenum, pname : GLenum, params : GLint ) : void;

    glLightModelf ( pname : GLenum, param : GLfloat ) : void;
    glLightModeli ( pname : GLenum, param : GLint ) : void;
    glLightModelfv ( pname : GLenum, param : GLfloat ) : void;
    glLightModeliv ( pname : GLenum, param : GLint ) : void;

    glMaterialf ( face : GLenum, pname : GLenum, param : GLfloat ) : void;
    glMateriali ( face : GLenum, pname : GLenum, param : GLint ) : void;
    glMaterialfv ( face : GLenum, pname : GLenum, param : GLfloat ) : void;
    glMaterialiv ( face : GLenum, pname : GLenum, param : GLint ) : void;

    glGetMaterialfv ( face : GLenum, pname : GLenum, param : GLfloat ) : void;
    glGetMaterialiv ( face : GLenum, pname : GLenum, param : GLint ) : void;

    glColorMaterial ( face : GLenum, mode : GLenum ) : void;  
}

export interface CallsRaster<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glPixelZoom ( xfactor : GLfloat, yfactor : GLfloat ) : void;
    
    glPixelStoref ( pname : GLenum, param : GLfloat ) : void;
    glPixelStorei ( pname : GLenum, param : GLint ) : void;

    glPixelTransferf ( pname : GLenum, param : GLfloat ) : void;
    glPixelTransferi ( pname : GLenum, param : GLint ) : void;

    glPixelMapfv ( map : GLenum, mapsize : GLsizei, values : GLfloat ) : void;
    glPixelMapuiv ( map : GLenum, mapsize : GLsizei, values : GLuint ) : void;
    glPixelMapusv ( map : GLenum, mapsize : GLsizei, values : GLushort ) : void;

    glGetPixelMapfv ( map : GLenum, values : GLfloat ) : void;
    glGetPixelMapuiv ( map : GLenum, values : GLuint ) : void;
    glGetPixelMapusv ( map : GLenum, values : GLushort ) : void;

    glBitmap ( width : GLsizei, height : GLsizei, xorig : GLfloat, yorig : GLfloat, xmove : GLfloat, ymove : GLfloat, bitmap : GLubyte ) : void;

    glReadPixels ( x : GLint, y : GLint, width : GLsizei, height : GLsizei, format : GLenum, type : GLenum, pixels : GLvoid ) : void;

    glDrawPixels ( x : GLint, y : GLint, width : GLsizei, height : GLsizei, format : GLenum, type : GLenum, pixels : GLvoid ) : void;

    glCopyPixels ( x : GLint, y : GLint, width : GLsizei, height : GLsizei, type : GLenum ) : void;
}

export interface CallsStenciling<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glStencilFunc ( func : GLenum, mask : GLuint ) : void;
    glStencilMask ( mask : GLuint ) : void;
    glStencilOp ( fail : GLenum, zfail : GLenum, zpass : GLenum ) : void;
    glClearStencil ( s : GLint ) : void;
}

export interface CallsTextureMapping<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glTextGend ( coord : GLenum, pname : GLenum, param : GLdouble ) : void;
    glTextGenf ( coord : GLenum, pname : GLenum, param : GLfloat ) : void;
    glTextGeni ( coord : GLenum, pname : GLenum, param : GLint ) : void;

    glTextGendv ( coord : GLenum, pname : GLenum, params : GLdouble ) : void;
    glTextGenfv ( coord : GLenum, pname : GLenum, params : GLfloat ) : void;
    glTextGeniv ( coord : GLenum, pname : GLenum, params : GLint ) : void;

    glGetTextGendv ( coord : GLenum, pname : GLenum, params : GLdouble ) : void;
    glGetTextGenfv ( coord : GLenum, pname : GLenum, params : GLfloat ) : void;
    glGetTextGeniv ( coord : GLenum, pname : GLenum, params : GLint ) : void;

    glTexEnvf ( target : GLenum, pname : GLenum, param : GLfloat ) : void;
    glTexEnvi ( target : GLenum, pname : GLenum, param : GLint ) : void;

    glTexEnvfv ( target : GLenum, pname : GLenum, params : GLfloat ) : void;
    glTexEnviv ( target : GLenum, pname : GLenum, params : GLint ) : void;

    glGetTexEnvfv ( target : GLenum, pname : GLenum, params : GLfloat ) : void;
    glGetTexEnviv ( target : GLenum, pname : GLenum, params : GLint ) : void;

    glTexParameterf ( target : GLenum, pname : GLenum, param : GLfloat ) : void;
    glTexParameteri ( target : GLenum, pname : GLenum, param : GLint ) : void;

    glTexParameterfv ( target : GLenum, pname : GLenum, params : GLfloat ) : void;
    glTexParameteriv ( target : GLenum, pname : GLenum, params : GLint ) : void;

    glGetTexParameterfv ( target : GLenum, pname : GLenum, params : GLfloat ) : void;
    glGetTexParameteriv ( target : GLenum, pname : GLenum, params : GLint ) : void;

    glGetTexLevelParameterfv ( target : GLenum, level : GLint, pname : GLenum, params : GLfloat ) : void;
    glGetTexLevelParameteriv ( target : GLenum, level : GLint, pname : GLenum, params : GLint ) : void;

    glTexImage1D ( target : GLenum, level : GLint, internalFormat : GLint, width : GLsizei, border : GLint, format : GLenum, type : GLenum, pixels : GLvoid ) : void;
    
    glTexImage2d ( target : GLenum, level : GLint, internalFormat : GLint, width : GLsizei, height : GLsizei, border : GLint, format : GLenum, type : GLenum, pixels : GLvoid ) : void;

    glGetTexImage ( target : GLenum, level : GLint, format : GLenum, type : GLenum, pixels : GLvoid ) : void;
}

export interface CallsEvaluators<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glMap1d ( target : GLenum, u1 : GLdouble, u2 : GLdouble, stride : GLint, order : GLint, points : GLdouble ) : void;
    glMap1f ( target : GLenum, u1 : GLfloat, u2 : GLfloat, stride : GLint, prder : GLint, points : GLfloat ) : void;

    glMap2d ( target : GLenum, u1 : GLdouble, u2 : GLdouble, ustride : GLint, uorder : GLint, v1 : GLdouble, v2 : GLdouble, vstride : GLint, vorder : GLint, points : GLdouble ) : void;
    glMap2f ( target : GLenum, u1 : GLfloat, u2 : GLfloat, ustride : GLint, uorder : GLint, v1 : GLfloat, v2 : GLfloat, vstride : GLint, vorder : GLint, points : GLfloat ) : void;

    glGetMapdv ( target : GLenum, query : GLenum, v : GLdouble ) : void;
    glGetMapfv ( target : GLenum, query : GLenum, v : GLfloat ) : void;
    glGetMapiv ( target : GLenum, query : GLenum, v : GLint ) : void;

    glEvalCoord1d ( u : GLdouble ) : void;
    glEvalCoord1f ( u : GLfloat ) : void;

    glEvalCoord1dv ( u : GLdouble ) : void;
    glEvalCoord1fv ( u : GLfloat ) : void;

    glEvalCoord2d ( u : GLdouble, v : GLdouble ) : void;
    glEvalCoord2f ( u : GLfloat, v : GLfloat ) : void;
    
    glEvalCoord2dv ( u : GLdouble ) : void;
    glEvalCoord2fv ( u : GLfloat ) : void;

    glMapGrid1d ( un : GLint, u1 : GLdouble, u2 : GLdouble ) : void;
    glMapGrid1f ( un : GLint, u1 : GLfloat, u2 : GLfloat ) : void;

    glMapGrid2d ( un : GLint, u1: GLdouble, u2 : GLdouble, vn : GLint, v1 : GLdouble, u2 : GLdouble ) : void;
    glMapGrid2f ( un : GLint, u1: GLfloat, u2 : GLfloat, vn : GLint, v1 : GLfloat, u2 : GLfloat ) : void;

    glEvalPoint1 ( i : GLint ) : void;
    glEvalPoint2 ( i : GLint, j : GLint ) : void;
    
    glEvalMesh1 ( mode : GLenum, i1 : GLint, i2 : GLint ) : void;
    glEvalMesh2 ( mode : GLenum, i1 : GLint, i2 : GLint, j1 : GLint, j2 : GLint ) : void;
}

export interface CallsFog<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glFogf ( pname : GLenum, param : GLfloat ) : void;
    glFogi ( pname : GLenum, paran : GLint ) : void;

    glFogfv ( pname : GLenum, params : GLfloat ) : void;
    glFogiv ( pname : GLenum, params : GLint ) : void;
}

export interface CallsSellectionFeedback<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
{
    glFeedbackBuffer ( size : GLsizei, type : GLenum, buffer : GLfloat ) : void;
    glPassThrough ( token : GLfloat ) : void;
    glSelectBuffer ( size : GLsizei, buffer : GLuint ) : void;
    glInitNames ( ) : void;
    glLoadName ( name : GLuint ) : void;
    glPushName ( name : GLuint ) : void;
    glPopName ( ) : void;
}

// <GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>
export interface Calls<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd> extends CallsMisc<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>, CallsDepthBuffer<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsAccumulationBuffer<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsDisplayList<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsDrawing<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsLighting<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsRaster<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsStenciling<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsStenciling<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsTextureMapping<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>,CallsTransofrmation<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>, CallsEvaluators<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd>, CallsSellectionFeedback<GLenum, GLboolean, GLbitfield, GLvoid, GLbyte, GLshort, GLint, GLubyte, GLushort, GLuint, GLsizei, GLfloat, GLclampf, GLdouble, GLclampd> {}
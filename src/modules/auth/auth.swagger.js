/**
 * @swagger
 * tags:
 *  name: Auth
 *  description: Auth module & Routes
 */

/**
 * @swagger
 *  components:
 *      schemas:
 *          SendOTP:
 *              type: object
 *              required:
 *                  -   mobile               
 *              properties:
 *                  mobile:
 *                      type: string
 *                      example: ''
 *          CheckOTP:
 *              type: object
 *              required:
 *                  -   mobile
 *                  -   code               
 *              properties:
 *                  mobile:
 *                      type: string
 *                      example: ''
 *                  code:
 *                      type: string
 *                      example: ''
 */
/**
 * @swagger
 * 
 * /auth/send-otp:
 *  post:
 *      summary: login with OTP in this end-point
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref:   "#/components/schemas/SendOTP"
 *              application/json:
 *                  schema:
 *                      $ref:   "#/components/schemas/SendOTP"
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * 
 * /auth/check-otp:
 *  post:
 *      summary: check otp for user login
 *      tags:
 *          -   Auth
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref:   "#/components/schemas/CheckOTP"
 *              application/json:
 *                  schema:
 *                      $ref:   "#/components/schemas/CheckOTP"
 *      responses:
 *          200:
 *              description: success
 */
/**
 * @swagger
 * 
 * /auth/logout:
 *  get:
 *      summary: logout user
 *      tags:
 *          -   Auth
 *      responses:
 *          200:
 *              description: success
 */
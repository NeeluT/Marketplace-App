/**
 * @swagger
 * tags:
 *  name: Category
 *  description: Category module & Routes
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateCategory:
 *              type: object
 *              required:
 *                  -   name
 *                  -   icon
 *              properties:
 *                  name:
 *                      type: string
 *                      example: ''
 *                  slug:
 *                      type: string
 *                      example: ''
 *                  icon:
 *                      type: string
 *                      example: ''
 *                  parent:
 *                      type: string
 *                      example: ''
 */
/**
 * @swagger
 * /category:
 *  post:
 *      summary: Create a new category
 *      tags:
 *          -   Category
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateCategory'
 *      responses:
 *          201:
 *              description: Successfully created the category        
 */
/**
 * @swagger
 * /category:
 *  get:
 *      summary: get all categories
 *      tags:
 *          -   Category
 *      responses:
 *          200: 
 *              description: successfully
 */
/**
 * @swagger
 * /category/{id}:
 *  delete:
 *      summary: delete category
 *      tags:
 *          -   Category
 *      parameters:
 *          -   in: path
 *              name: id
 *      responses:
 *          200: 
 *              description: successfully
 */
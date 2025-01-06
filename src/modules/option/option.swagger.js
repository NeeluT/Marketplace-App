/**
 * @swagger
 * tags:
 *  name: Option
 *  description: Option module & Routes
 */
/**
 * @swagger
 *  components:
 *      schemas:
 *          CreateOption:
 *              type: object
 *              required:
 *                  -   title
 *                  -   key
 *                  -   type
 *                  -   category
 *              properties:
 *                  title:
 *                      type: string
 *                      example: ''
 *                  key:
 *                      type: string
 *                      example: ''
 *                  category:
 *                      type: string
 *                      example: ''
 *                  guide:
 *                      type: string
 *                      example: ''
 *                  required:
 *                      type: boolean
 *                      example: ''
 *                  type:
 *                      type: string
 *                      enum:
 *                          -   number
 *                          -   string
 *                          - boolean
 *                          -   array
 *                      example: ''
 *                  enum:
 *                      type: array
 *                      items:
 *                          type: string
 *                          example: ''
 *          UpdateOption:
 *              type: object
 *              properties:
 *                  title:
 *                      type: string
 *                      example: ''
 *                  key:
 *                      type: string
 *                      example: ''
 *                  category:
 *                      type: string
 *                      example: ''
 *                  guide:
 *                      type: string
 *                      example: ''
 *                  required:
 *                      type: boolean
 *                      example: ''
 *                  type:
 *                      type: string
 *                      enum:
 *                          -   number
 *                          -   string
 *                          - boolean
 *                          -   array
 *                      example: ''
 *                  enum:
 *                      type: array
 *                      items:
 *                          type: string
 *                          example: ''
 */
/**
 * @swagger
 * /option:
 *  post:
 *      summary: Create a new option
 *      tags:
 *          -   Option
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/CreateOption'
 *      responses:
 *          201:
 *              description: Successfully created the option        
 */
/**
 * @swagger
 * /option/{id}:
 *  put:
 *      summary: Update an option by id
 *      tags:
 *          -   Option
 *      requestBody:
 *          content:
 *              application/x-www-form-urlencoded:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateOption'
 *              application/json:
 *                  schema:
 *                      $ref: '#/components/schemas/UpdateOption'
 *      responses:
 *          201:
 *              description: Successfully created the option        
 */
/**
 * @swagger
 * /option/by-category/{categoryId}:
 *  get:
 *      summary: get all options of category
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *              name: categoryId
 *              type: string
 *      responses:
 *          200: 
 *              description: successfully
 */
/**
 * @swagger
 * /option/by-category-slug/{slug}:
 *  get:
 *      summary: get all options of category
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *              name: slug
 *              type: string
 *      responses:
 *          200: 
 *              description: successfully
 */
/**
 * @swagger
 * /option/{id}:
 *  get:
 *      summary: get option by id
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200: 
 *              description: successfully
 */
/**
 * @swagger
 * /option:
 *  get:
 *      summary: get all options
 *      tags:
 *          -   Option
 *      responses:
 *          200: 
 *              description: successfully
 */
/**
 * @swagger
 * /option/{id}:
 *  delete:
 *      summary: remove option by id
 *      tags:
 *          -   Option
 *      parameters:
 *          -   in: path
 *              name: id
 *              type: string
 *      responses:
 *          200: 
 *              description: Deleted successfully
 */
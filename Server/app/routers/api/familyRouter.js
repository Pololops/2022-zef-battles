import { Router } from 'express';
const router = Router();

import controllerHandler from '../../middlewares/controllerHandler.js';

import controller from '../../controllers/familyController.js';

router
	.route('/')
	/**
	 * GET /v1/family
	 * @summary Get all families order by name
	 * @tags Family
	 * @return {Family} 200 - success response - application/json
	 */
	.get(controllerHandler(controller.getAll))
	/**
	 * POST /api/family
	 * @summary Create a family
	 * @tags Family
	 * @param {InputFamily} request.body.required - family info
	 * @return {Family} 200 - success response - application/json
	 * @return {ApiError} 400 - Bad request response - application/json
	 * @return {ApiError} 404 - Family not found - application/json
	 */
	.post(controllerHandler(controller.create));

router
	.route('/:id(\\d+)')
	/**
	 * PATCH /api/family/{id}
	 * @summary Update one family
	 * @tags Family
	 * @param {number} id.path.required - family identifier
	 * @param {InputFamily} request.body.required - family info
	 * @return {Family} 200 - success response - application/json
	 * @return {ApiError} 400 - Bad request response - application/json
	 * @return {ApiError} 404 - Family not found - application/json
	 */
	.patch(controllerHandler(controller.update))
	/**
	 * DELETE /api/family/{id}
	 * @summary Delete one family
	 * @tags Family
	 * @param {number} id.path.required - family identifier
	 * @return {Family} 200 - success response - application/json
	 * @return {ApiError} 400 - Bad request response - application/json
	 * @return {ApiError} 404 - Family not found - application/json
	 */
	.delete(controllerHandler(controller.delete));

export default router;

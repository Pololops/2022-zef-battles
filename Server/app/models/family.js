import Debug from 'debug';
const debug = Debug('Datamapper:familyDatamapper:log');

import client from '../database/index.js';

/**
 * @typedef {object} Family
 * @property {number} id - The unique Pk id of the table
 * @property {string} name - The family's name
 */

const familyDatamapper = {
	/**
	 * All families
	 * @returns {Family[]} - All the families from the database order by name
	 */
	async findAll() {
		const result = await client.query(
			`SELECT * FROM "family" ORDER BY "name";`,
		);

		debug(result);
		return result.rows;
	},

	async isUnique(inputData) {
		const result = await client.query(
			`SELECT * FROM "family" WHERE "name" = $1;`,
			[inputData.name]
		);

		debug(result);
		return result.rows[0];
	},

	async insert(inputData) {
		const result = await client.query(
			`INSERT INTO "family" ("name") VALUES ($1) RETURNING *;`,
			[inputData.name]
		);

		debug(result);
		return result.rows[0];
	},
};

export default familyDatamapper;
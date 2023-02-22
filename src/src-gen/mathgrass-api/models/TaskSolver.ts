/* tslint:disable */
/* eslint-disable */
/**
 * MathGrass
 * This is the OpenAPI specification for MathGrass
 *
 * The version of the OpenAPI document: 0.1.0
 * Contact: andreas.domanowski@tu-dresden.de
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface TaskSolver
 */
export interface TaskSolver {
    /**
     * 
     * @type {number}
     * @memberof TaskSolver
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskSolver
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskSolver
     */
    executionDescriptor?: string;
}

/**
 * Check if a given object implements the TaskSolver interface.
 */
export function instanceOfTaskSolver(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskSolverFromJSON(json: any): TaskSolver {
    return TaskSolverFromJSONTyped(json, false);
}

export function TaskSolverFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskSolver {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'executionDescriptor': !exists(json, 'executionDescriptor') ? undefined : json['executionDescriptor'],
    };
}

export function TaskSolverToJSON(value?: TaskSolver | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'label': value.label,
        'executionDescriptor': value.executionDescriptor,
    };
}


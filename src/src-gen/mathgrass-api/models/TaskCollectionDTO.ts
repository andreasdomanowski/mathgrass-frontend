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
 * @interface TaskCollectionDTO
 */
export interface TaskCollectionDTO {
    /**
     * 
     * @type {number}
     * @memberof TaskCollectionDTO
     */
    id?: number;
    /**
     * 
     * @type {string}
     * @memberof TaskCollectionDTO
     */
    label?: string;
    /**
     * 
     * @type {Array<number>}
     * @memberof TaskCollectionDTO
     */
    tasks?: Array<number>;
}

/**
 * Check if a given object implements the TaskCollectionDTO interface.
 */
export function instanceOfTaskCollectionDTO(value: object): boolean {
    let isInstance = true;

    return isInstance;
}

export function TaskCollectionDTOFromJSON(json: any): TaskCollectionDTO {
    return TaskCollectionDTOFromJSONTyped(json, false);
}

export function TaskCollectionDTOFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskCollectionDTO {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': !exists(json, 'id') ? undefined : json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'tasks': !exists(json, 'tasks') ? undefined : json['tasks'],
    };
}

export function TaskCollectionDTOToJSON(value?: TaskCollectionDTO | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'label': value.label,
        'tasks': value.tasks,
    };
}

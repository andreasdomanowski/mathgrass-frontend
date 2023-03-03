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
 * @interface TaskHint
 */
export interface TaskHint {
    /**
     * 
     * @type {number}
     * @memberof TaskHint
     */
    id: number;
    /**
     * 
     * @type {string}
     * @memberof TaskHint
     */
    label?: string;
    /**
     * 
     * @type {string}
     * @memberof TaskHint
     */
    content: string;
}

/**
 * Check if a given object implements the TaskHint interface.
 */
export function instanceOfTaskHint(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "id" in value;
    isInstance = isInstance && "content" in value;

    return isInstance;
}

export function TaskHintFromJSON(json: any): TaskHint {
    return TaskHintFromJSONTyped(json, false);
}

export function TaskHintFromJSONTyped(json: any, ignoreDiscriminator: boolean): TaskHint {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'id': json['id'],
        'label': !exists(json, 'label') ? undefined : json['label'],
        'content': json['content'],
    };
}

export function TaskHintToJSON(value?: TaskHint | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'id': value.id,
        'label': value.label,
        'content': value.content,
    };
}


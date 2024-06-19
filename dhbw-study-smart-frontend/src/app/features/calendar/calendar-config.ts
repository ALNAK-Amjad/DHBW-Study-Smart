/**
 * @description
 * Rapla Timetable JSON format
 *
 * @example
 * ```json
 * {
 *     "entityType": "LECTURE",
 *     "date": "2024-05-05T22:00:00.000Z",
 *     "site": "KA",
 *     "startTime": "2024-05-06T11:00:00.000Z",
 *     "endTime": "2024-05-06T14:15:00.000Z",
 *     "name": "Statistik",
 *     "type": "PRESENCE",
 *     "lecturer": "",
 *     "rooms": [
 *       "A264 Hörsaal"
 *     ],
 *     "course": "KA-TINF22B4",
 *     "id": 323608
 * }
 * ```
 */
export interface RaplaTimetableLecture {
    entityType: string,
    date: string,
    site: string,
    startTime: string,
    endTime: string,
    name: string,
    type: string,
    lecturer: string,
    rooms: string[],
    course: string,
    id: number,
}

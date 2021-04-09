export const DEFAULT_MAX_TIME = '23:59'
export const DEFAULT_MAX_TIME_MINUTES = 24 * 60 - 1
export const DEFAULT_MIN_TIME = '00:00'
export const DEFAULT_MIN_TIME_MINUTES = 0
export const DEFAULT_STEP = 30
export const MIN_STEP = 1

export const FILTER_DATASET = {
  filter:
    '0?{{ hourQueryFilter }}:{{minuteQueryFilter}}.*{{ apQueryFilter }}m?',
  apQueryFilter: '([ap])',
  hourQueryFilter: '([1-9][0-2]?)',
  minuteQueryFilter: '[\\d]+:([0-9]{0,2})',
}

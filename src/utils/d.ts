declare module 'flowbite-datepicker' {
  export interface DatepickerOptions {
    autohide?: boolean
    format?: string
    language?: string
    minDate?: Date | string
    maxDate?: Date | string
    orientation?: string
    todayHighlight?: boolean
    clearBtn?: boolean
    // adicione outras opções se precisar
  }

  export default class Datepicker {
    constructor(element: HTMLElement, options?: DatepickerOptions)
    destroy(): void
  }
}


import {ActionStatus} from "./action-status.enum";

export interface Action {
  title: string
  status: ActionStatus
  onClick: ($event: Event) => void
}

import {FlashMessageStatus} from "./flashMessageStatus.enum";
import {TextWrapper} from "../models/text.wrapper";
import {TimeWrapper} from "../models/time.wrapper";
import {Action} from "../action/action.interface";

export interface FlashMessage {
  status: FlashMessageStatus
  text: TextWrapper
  actions: Action[]
  timout: TimeWrapper
}

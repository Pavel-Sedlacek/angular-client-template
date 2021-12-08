import {FlashMessageStatus} from "./flashMessageStatus.enum";
import {TextWrapper} from "../models/text.wrapper";
import {TimeWrapper} from "../models/time.wrapper";

export interface FlashMessage {
  status: FlashMessageStatus
  text: TextWrapper
  timout: TimeWrapper
}

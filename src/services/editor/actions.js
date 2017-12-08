import * as actions from './constants';
import { Util } from "../../util/index";


export const noteSubmit = (title, note) => ({
    type: actions.SUBMIT_NOTE,
    id: Util.createID(),
    note: {
        title, note,
        filter: false,
        modified: Util.Date(),
        category: 'uncategorized'
    }
})

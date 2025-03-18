
const express = require('express')
import {handler5523} from "./handler5523";
const app = express()
app.get('/5523', handler5523)
app.listen(3000, () => {})
        
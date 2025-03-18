
const express = require('express')
import {handler6523} from "./handler6523";
const app = express()
app.get('/6523', handler6523)
app.listen(3000, () => {})
        

const express = require('express')
import {handler2523} from "./handler2523";
const app = express()
app.get('/2523', handler2523)
app.listen(3000, () => {})
        
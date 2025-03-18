
const express = require('express')
import {handler523} from "./handler523";
const app = express()
app.get('/523', handler523)
app.listen(3000, () => {})
        
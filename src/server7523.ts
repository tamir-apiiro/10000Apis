
const express = require('express')
import {handler7523} from "./handler7523";
const app = express()
app.get('/7523', handler7523)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1523} from "./handler1523";
const app = express()
app.get('/1523', handler1523)
app.listen(3000, () => {})
        
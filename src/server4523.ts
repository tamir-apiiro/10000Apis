
const express = require('express')
import {handler4523} from "./handler4523";
const app = express()
app.get('/4523', handler4523)
app.listen(3000, () => {})
        
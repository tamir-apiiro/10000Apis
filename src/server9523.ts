
const express = require('express')
import {handler9523} from "./handler9523";
const app = express()
app.get('/9523', handler9523)
app.listen(3000, () => {})
        
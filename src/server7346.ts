
const express = require('express')
import {handler7346} from "./handler7346";
const app = express()
app.get('/7346', handler7346)
app.listen(3000, () => {})
        
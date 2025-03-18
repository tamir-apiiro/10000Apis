
const express = require('express')
import {handler7742} from "./handler7742";
const app = express()
app.get('/7742', handler7742)
app.listen(3000, () => {})
        
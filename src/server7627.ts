
const express = require('express')
import {handler7627} from "./handler7627";
const app = express()
app.get('/7627', handler7627)
app.listen(3000, () => {})
        
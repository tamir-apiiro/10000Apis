
const express = require('express')
import {handler2819} from "./handler2819";
const app = express()
app.get('/2819', handler2819)
app.listen(3000, () => {})
        
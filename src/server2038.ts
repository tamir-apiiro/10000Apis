
const express = require('express')
import {handler2038} from "./handler2038";
const app = express()
app.get('/2038', handler2038)
app.listen(3000, () => {})
        
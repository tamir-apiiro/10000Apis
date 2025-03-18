
const express = require('express')
import {handler7053} from "./handler7053";
const app = express()
app.get('/7053', handler7053)
app.listen(3000, () => {})
        
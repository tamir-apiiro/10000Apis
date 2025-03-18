
const express = require('express')
import {handler7378} from "./handler7378";
const app = express()
app.get('/7378', handler7378)
app.listen(3000, () => {})
        
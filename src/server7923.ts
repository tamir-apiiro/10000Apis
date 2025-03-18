
const express = require('express')
import {handler7923} from "./handler7923";
const app = express()
app.get('/7923', handler7923)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7517} from "./handler7517";
const app = express()
app.get('/7517', handler7517)
app.listen(3000, () => {})
        
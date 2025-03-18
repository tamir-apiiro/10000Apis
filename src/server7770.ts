
const express = require('express')
import {handler7770} from "./handler7770";
const app = express()
app.get('/7770', handler7770)
app.listen(3000, () => {})
        
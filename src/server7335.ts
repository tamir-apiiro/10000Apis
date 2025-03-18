
const express = require('express')
import {handler7335} from "./handler7335";
const app = express()
app.get('/7335', handler7335)
app.listen(3000, () => {})
        
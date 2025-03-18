
const express = require('express')
import {handler770} from "./handler770";
const app = express()
app.get('/770', handler770)
app.listen(3000, () => {})
        
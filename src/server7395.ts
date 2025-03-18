
const express = require('express')
import {handler7395} from "./handler7395";
const app = express()
app.get('/7395', handler7395)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7889} from "./handler7889";
const app = express()
app.get('/7889', handler7889)
app.listen(3000, () => {})
        
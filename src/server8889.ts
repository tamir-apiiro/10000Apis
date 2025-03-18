
const express = require('express')
import {handler8889} from "./handler8889";
const app = express()
app.get('/8889', handler8889)
app.listen(3000, () => {})
        
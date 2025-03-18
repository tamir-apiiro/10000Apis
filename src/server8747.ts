
const express = require('express')
import {handler8747} from "./handler8747";
const app = express()
app.get('/8747', handler8747)
app.listen(3000, () => {})
        
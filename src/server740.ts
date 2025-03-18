
const express = require('express')
import {handler740} from "./handler740";
const app = express()
app.get('/740', handler740)
app.listen(3000, () => {})
        
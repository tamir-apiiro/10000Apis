
const express = require('express')
import {handler454} from "./handler454";
const app = express()
app.get('/454', handler454)
app.listen(3000, () => {})
        
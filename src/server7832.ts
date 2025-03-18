
const express = require('express')
import {handler7832} from "./handler7832";
const app = express()
app.get('/7832', handler7832)
app.listen(3000, () => {})
        
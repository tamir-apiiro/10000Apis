
const express = require('express')
import {handler7804} from "./handler7804";
const app = express()
app.get('/7804', handler7804)
app.listen(3000, () => {})
        
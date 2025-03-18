
const express = require('express')
import {handler2770} from "./handler2770";
const app = express()
app.get('/2770', handler2770)
app.listen(3000, () => {})
        
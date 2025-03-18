
const express = require('express')
import {handler7442} from "./handler7442";
const app = express()
app.get('/7442', handler7442)
app.listen(3000, () => {})
        
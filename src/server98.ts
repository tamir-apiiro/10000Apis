
const express = require('express')
import {handler98} from "./handler98";
const app = express()
app.get('/98', handler98)
app.listen(3000, () => {})
        
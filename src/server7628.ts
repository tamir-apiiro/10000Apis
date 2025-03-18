
const express = require('express')
import {handler7628} from "./handler7628";
const app = express()
app.get('/7628', handler7628)
app.listen(3000, () => {})
        
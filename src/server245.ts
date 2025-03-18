
const express = require('express')
import {handler245} from "./handler245";
const app = express()
app.get('/245', handler245)
app.listen(3000, () => {})
        

const express = require('express')
import {handler728} from "./handler728";
const app = express()
app.get('/728', handler728)
app.listen(3000, () => {})
        
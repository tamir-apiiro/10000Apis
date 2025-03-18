
const express = require('express')
import {handler922} from "./handler922";
const app = express()
app.get('/922', handler922)
app.listen(3000, () => {})
        
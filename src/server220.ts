
const express = require('express')
import {handler220} from "./handler220";
const app = express()
app.get('/220', handler220)
app.listen(3000, () => {})
        
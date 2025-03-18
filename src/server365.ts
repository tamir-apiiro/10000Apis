
const express = require('express')
import {handler365} from "./handler365";
const app = express()
app.get('/365', handler365)
app.listen(3000, () => {})
        
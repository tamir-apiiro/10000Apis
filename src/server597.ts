
const express = require('express')
import {handler597} from "./handler597";
const app = express()
app.get('/597', handler597)
app.listen(3000, () => {})
        
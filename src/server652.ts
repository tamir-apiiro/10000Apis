
const express = require('express')
import {handler652} from "./handler652";
const app = express()
app.get('/652', handler652)
app.listen(3000, () => {})
        
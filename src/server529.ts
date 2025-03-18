
const express = require('express')
import {handler529} from "./handler529";
const app = express()
app.get('/529', handler529)
app.listen(3000, () => {})
        
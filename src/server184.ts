
const express = require('express')
import {handler184} from "./handler184";
const app = express()
app.get('/184', handler184)
app.listen(3000, () => {})
        
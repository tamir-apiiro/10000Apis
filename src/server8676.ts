
const express = require('express')
import {handler8676} from "./handler8676";
const app = express()
app.get('/8676', handler8676)
app.listen(3000, () => {})
        
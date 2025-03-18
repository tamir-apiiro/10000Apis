
const express = require('express')
import {handler676} from "./handler676";
const app = express()
app.get('/676', handler676)
app.listen(3000, () => {})
        

const express = require('express')
import {handler536} from "./handler536";
const app = express()
app.get('/536', handler536)
app.listen(3000, () => {})
        

const express = require('express')
import {handler469} from "./handler469";
const app = express()
app.get('/469', handler469)
app.listen(3000, () => {})
        
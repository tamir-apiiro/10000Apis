
const express = require('express')
import {handler7163} from "./handler7163";
const app = express()
app.get('/7163', handler7163)
app.listen(3000, () => {})
        
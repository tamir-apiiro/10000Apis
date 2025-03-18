
const express = require('express')
import {handler7625} from "./handler7625";
const app = express()
app.get('/7625', handler7625)
app.listen(3000, () => {})
        
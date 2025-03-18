
const express = require('express')
import {handler524} from "./handler524";
const app = express()
app.get('/524', handler524)
app.listen(3000, () => {})
        
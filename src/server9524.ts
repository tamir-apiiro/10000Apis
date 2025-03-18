
const express = require('express')
import {handler9524} from "./handler9524";
const app = express()
app.get('/9524', handler9524)
app.listen(3000, () => {})
        
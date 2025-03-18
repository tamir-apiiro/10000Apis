
const express = require('express')
import {handler386} from "./handler386";
const app = express()
app.get('/386', handler386)
app.listen(3000, () => {})
        
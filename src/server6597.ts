
const express = require('express')
import {handler6597} from "./handler6597";
const app = express()
app.get('/6597', handler6597)
app.listen(3000, () => {})
        
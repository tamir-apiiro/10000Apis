
const express = require('express')
import {handler6365} from "./handler6365";
const app = express()
app.get('/6365', handler6365)
app.listen(3000, () => {})
        
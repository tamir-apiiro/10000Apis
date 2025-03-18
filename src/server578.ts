
const express = require('express')
import {handler578} from "./handler578";
const app = express()
app.get('/578', handler578)
app.listen(3000, () => {})
        
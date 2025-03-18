
const express = require('express')
import {handler8010} from "./handler8010";
const app = express()
app.get('/8010', handler8010)
app.listen(3000, () => {})
        
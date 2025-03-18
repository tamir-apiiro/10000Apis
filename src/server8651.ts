
const express = require('express')
import {handler8651} from "./handler8651";
const app = express()
app.get('/8651', handler8651)
app.listen(3000, () => {})
        
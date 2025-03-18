
const express = require('express')
import {handler8578} from "./handler8578";
const app = express()
app.get('/8578', handler8578)
app.listen(3000, () => {})
        
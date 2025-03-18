
const express = require('express')
import {handler7578} from "./handler7578";
const app = express()
app.get('/7578', handler7578)
app.listen(3000, () => {})
        
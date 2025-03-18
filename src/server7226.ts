
const express = require('express')
import {handler7226} from "./handler7226";
const app = express()
app.get('/7226', handler7226)
app.listen(3000, () => {})
        
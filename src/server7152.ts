
const express = require('express')
import {handler7152} from "./handler7152";
const app = express()
app.get('/7152', handler7152)
app.listen(3000, () => {})
        
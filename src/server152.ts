
const express = require('express')
import {handler152} from "./handler152";
const app = express()
app.get('/152', handler152)
app.listen(3000, () => {})
        
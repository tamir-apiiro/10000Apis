
const express = require('express')
import {handler1152} from "./handler1152";
const app = express()
app.get('/1152', handler1152)
app.listen(3000, () => {})
        
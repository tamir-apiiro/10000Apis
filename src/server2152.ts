
const express = require('express')
import {handler2152} from "./handler2152";
const app = express()
app.get('/2152', handler2152)
app.listen(3000, () => {})
        
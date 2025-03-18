
const express = require('express')
import {handler6152} from "./handler6152";
const app = express()
app.get('/6152', handler6152)
app.listen(3000, () => {})
        
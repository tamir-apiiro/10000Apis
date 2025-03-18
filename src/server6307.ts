
const express = require('express')
import {handler6307} from "./handler6307";
const app = express()
app.get('/6307', handler6307)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6482} from "./handler6482";
const app = express()
app.get('/6482', handler6482)
app.listen(3000, () => {})
        

const express = require('express')
import {handler6745} from "./handler6745";
const app = express()
app.get('/6745', handler6745)
app.listen(3000, () => {})
        
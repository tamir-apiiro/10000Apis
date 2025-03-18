
const express = require('express')
import {handler6109} from "./handler6109";
const app = express()
app.get('/6109', handler6109)
app.listen(3000, () => {})
        
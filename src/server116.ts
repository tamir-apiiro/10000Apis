
const express = require('express')
import {handler116} from "./handler116";
const app = express()
app.get('/116', handler116)
app.listen(3000, () => {})
        
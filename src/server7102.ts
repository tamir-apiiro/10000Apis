
const express = require('express')
import {handler7102} from "./handler7102";
const app = express()
app.get('/7102', handler7102)
app.listen(3000, () => {})
        
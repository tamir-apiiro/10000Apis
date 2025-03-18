
const express = require('express')
import {handler2102} from "./handler2102";
const app = express()
app.get('/2102', handler2102)
app.listen(3000, () => {})
        
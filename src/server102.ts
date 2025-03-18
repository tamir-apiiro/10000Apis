
const express = require('express')
import {handler102} from "./handler102";
const app = express()
app.get('/102', handler102)
app.listen(3000, () => {})
        
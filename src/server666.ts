
const express = require('express')
import {handler666} from "./handler666";
const app = express()
app.get('/666', handler666)
app.listen(3000, () => {})
        
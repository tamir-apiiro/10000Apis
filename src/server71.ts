
const express = require('express')
import {handler71} from "./handler71";
const app = express()
app.get('/71', handler71)
app.listen(3000, () => {})
        
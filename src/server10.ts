
const express = require('express')
import {handler10} from "./handler10";
const app = express()
app.get('/10', handler10)
app.listen(3000, () => {})
        
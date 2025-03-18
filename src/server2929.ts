
const express = require('express')
import {handler2929} from "./handler2929";
const app = express()
app.get('/2929', handler2929)
app.listen(3000, () => {})
        
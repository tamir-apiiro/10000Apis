
const express = require('express')
import {handler2452} from "./handler2452";
const app = express()
app.get('/2452', handler2452)
app.listen(3000, () => {})
        
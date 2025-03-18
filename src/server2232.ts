
const express = require('express')
import {handler2232} from "./handler2232";
const app = express()
app.get('/2232', handler2232)
app.listen(3000, () => {})
        

const express = require('express')
import {handler2030} from "./handler2030";
const app = express()
app.get('/2030', handler2030)
app.listen(3000, () => {})
        
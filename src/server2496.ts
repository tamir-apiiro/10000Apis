
const express = require('express')
import {handler2496} from "./handler2496";
const app = express()
app.get('/2496', handler2496)
app.listen(3000, () => {})
        
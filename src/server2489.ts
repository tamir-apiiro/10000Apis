
const express = require('express')
import {handler2489} from "./handler2489";
const app = express()
app.get('/2489', handler2489)
app.listen(3000, () => {})
        
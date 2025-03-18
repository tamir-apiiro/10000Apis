
const express = require('express')
import {handler2133} from "./handler2133";
const app = express()
app.get('/2133', handler2133)
app.listen(3000, () => {})
        
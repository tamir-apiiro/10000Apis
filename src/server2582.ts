
const express = require('express')
import {handler2582} from "./handler2582";
const app = express()
app.get('/2582', handler2582)
app.listen(3000, () => {})
        
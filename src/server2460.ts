
const express = require('express')
import {handler2460} from "./handler2460";
const app = express()
app.get('/2460', handler2460)
app.listen(3000, () => {})
        
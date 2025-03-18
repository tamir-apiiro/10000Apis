
const express = require('express')
import {handler2382} from "./handler2382";
const app = express()
app.get('/2382', handler2382)
app.listen(3000, () => {})
        
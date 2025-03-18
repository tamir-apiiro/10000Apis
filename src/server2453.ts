
const express = require('express')
import {handler2453} from "./handler2453";
const app = express()
app.get('/2453', handler2453)
app.listen(3000, () => {})
        
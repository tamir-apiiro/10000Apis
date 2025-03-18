
const express = require('express')
import {handler2386} from "./handler2386";
const app = express()
app.get('/2386', handler2386)
app.listen(3000, () => {})
        
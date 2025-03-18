
const express = require('express')
import {handler362} from "./handler362";
const app = express()
app.get('/362', handler362)
app.listen(3000, () => {})
        
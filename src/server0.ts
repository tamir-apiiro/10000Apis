
const express = require('express')
import {handler0} from "./handler0";
const app = express()
app.get('/0', handler0)
app.listen(3000, () => {})
        
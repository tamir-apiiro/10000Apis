
const express = require('express')
import {handler531} from "./handler531";
const app = express()
app.get('/531', handler531)
app.listen(3000, () => {})
        
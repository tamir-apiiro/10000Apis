
const express = require('express')
import {handler7786} from "./handler7786";
const app = express()
app.get('/7786', handler7786)
app.listen(3000, () => {})
        
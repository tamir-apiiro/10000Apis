
const express = require('express')
import {handler7175} from "./handler7175";
const app = express()
app.get('/7175', handler7175)
app.listen(3000, () => {})
        
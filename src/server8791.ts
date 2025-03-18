
const express = require('express')
import {handler8791} from "./handler8791";
const app = express()
app.get('/8791', handler8791)
app.listen(3000, () => {})
        

const express = require('express')
import {handler791} from "./handler791";
const app = express()
app.get('/791', handler791)
app.listen(3000, () => {})
        
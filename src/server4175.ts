
const express = require('express')
import {handler4175} from "./handler4175";
const app = express()
app.get('/4175', handler4175)
app.listen(3000, () => {})
        
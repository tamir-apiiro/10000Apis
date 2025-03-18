
const express = require('express')
import {handler4974} from "./handler4974";
const app = express()
app.get('/4974', handler4974)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4382} from "./handler4382";
const app = express()
app.get('/4382', handler4382)
app.listen(3000, () => {})
        
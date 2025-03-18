
const express = require('express')
import {handler4527} from "./handler4527";
const app = express()
app.get('/4527', handler4527)
app.listen(3000, () => {})
        
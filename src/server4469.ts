
const express = require('express')
import {handler4469} from "./handler4469";
const app = express()
app.get('/4469', handler4469)
app.listen(3000, () => {})
        
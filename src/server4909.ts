
const express = require('express')
import {handler4909} from "./handler4909";
const app = express()
app.get('/4909', handler4909)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4240} from "./handler4240";
const app = express()
app.get('/4240', handler4240)
app.listen(3000, () => {})
        
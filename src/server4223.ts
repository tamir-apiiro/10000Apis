
const express = require('express')
import {handler4223} from "./handler4223";
const app = express()
app.get('/4223', handler4223)
app.listen(3000, () => {})
        
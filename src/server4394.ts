
const express = require('express')
import {handler4394} from "./handler4394";
const app = express()
app.get('/4394', handler4394)
app.listen(3000, () => {})
        
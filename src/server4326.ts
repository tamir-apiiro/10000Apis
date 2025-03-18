
const express = require('express')
import {handler4326} from "./handler4326";
const app = express()
app.get('/4326', handler4326)
app.listen(3000, () => {})
        
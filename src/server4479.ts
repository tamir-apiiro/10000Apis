
const express = require('express')
import {handler4479} from "./handler4479";
const app = express()
app.get('/4479', handler4479)
app.listen(3000, () => {})
        
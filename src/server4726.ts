
const express = require('express')
import {handler4726} from "./handler4726";
const app = express()
app.get('/4726', handler4726)
app.listen(3000, () => {})
        

const express = require('express')
import {handler327} from "./handler327";
const app = express()
app.get('/327', handler327)
app.listen(3000, () => {})
        
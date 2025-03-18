
const express = require('express')
import {handler4144} from "./handler4144";
const app = express()
app.get('/4144', handler4144)
app.listen(3000, () => {})
        
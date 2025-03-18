
const express = require('express')
import {handler4387} from "./handler4387";
const app = express()
app.get('/4387', handler4387)
app.listen(3000, () => {})
        
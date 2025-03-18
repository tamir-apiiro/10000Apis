
const express = require('express')
import {handler4044} from "./handler4044";
const app = express()
app.get('/4044', handler4044)
app.listen(3000, () => {})
        
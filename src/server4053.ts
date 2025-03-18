
const express = require('express')
import {handler4053} from "./handler4053";
const app = express()
app.get('/4053', handler4053)
app.listen(3000, () => {})
        
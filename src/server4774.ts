
const express = require('express')
import {handler4774} from "./handler4774";
const app = express()
app.get('/4774', handler4774)
app.listen(3000, () => {})
        
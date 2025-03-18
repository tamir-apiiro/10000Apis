
const express = require('express')
import {handler4573} from "./handler4573";
const app = express()
app.get('/4573', handler4573)
app.listen(3000, () => {})
        
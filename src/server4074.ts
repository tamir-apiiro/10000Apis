
const express = require('express')
import {handler4074} from "./handler4074";
const app = express()
app.get('/4074', handler4074)
app.listen(3000, () => {})
        
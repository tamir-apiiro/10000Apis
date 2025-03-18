
const express = require('express')
import {handler4447} from "./handler4447";
const app = express()
app.get('/4447', handler4447)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4192} from "./handler4192";
const app = express()
app.get('/4192', handler4192)
app.listen(3000, () => {})
        
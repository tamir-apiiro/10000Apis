
const express = require('express')
import {handler4252} from "./handler4252";
const app = express()
app.get('/4252', handler4252)
app.listen(3000, () => {})
        
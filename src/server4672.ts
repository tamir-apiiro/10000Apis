
const express = require('express')
import {handler4672} from "./handler4672";
const app = express()
app.get('/4672', handler4672)
app.listen(3000, () => {})
        
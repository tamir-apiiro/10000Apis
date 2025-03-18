
const express = require('express')
import {handler4351} from "./handler4351";
const app = express()
app.get('/4351', handler4351)
app.listen(3000, () => {})
        
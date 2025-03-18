
const express = require('express')
import {handler4612} from "./handler4612";
const app = express()
app.get('/4612', handler4612)
app.listen(3000, () => {})
        
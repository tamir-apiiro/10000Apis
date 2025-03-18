
const express = require('express')
import {handler4979} from "./handler4979";
const app = express()
app.get('/4979', handler4979)
app.listen(3000, () => {})
        
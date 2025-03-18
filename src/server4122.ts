
const express = require('express')
import {handler4122} from "./handler4122";
const app = express()
app.get('/4122', handler4122)
app.listen(3000, () => {})
        
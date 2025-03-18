
const express = require('express')
import {handler4076} from "./handler4076";
const app = express()
app.get('/4076', handler4076)
app.listen(3000, () => {})
        
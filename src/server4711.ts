
const express = require('express')
import {handler4711} from "./handler4711";
const app = express()
app.get('/4711', handler4711)
app.listen(3000, () => {})
        
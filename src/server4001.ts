
const express = require('express')
import {handler4001} from "./handler4001";
const app = express()
app.get('/4001', handler4001)
app.listen(3000, () => {})
        
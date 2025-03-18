
const express = require('express')
import {handler4702} from "./handler4702";
const app = express()
app.get('/4702', handler4702)
app.listen(3000, () => {})
        
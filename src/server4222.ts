
const express = require('express')
import {handler4222} from "./handler4222";
const app = express()
app.get('/4222', handler4222)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4411} from "./handler4411";
const app = express()
app.get('/4411', handler4411)
app.listen(3000, () => {})
        
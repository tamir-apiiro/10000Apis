
const express = require('express')
import {handler4645} from "./handler4645";
const app = express()
app.get('/4645', handler4645)
app.listen(3000, () => {})
        
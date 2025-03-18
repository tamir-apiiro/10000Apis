
const express = require('express')
import {handler4472} from "./handler4472";
const app = express()
app.get('/4472', handler4472)
app.listen(3000, () => {})
        
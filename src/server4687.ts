
const express = require('express')
import {handler4687} from "./handler4687";
const app = express()
app.get('/4687', handler4687)
app.listen(3000, () => {})
        
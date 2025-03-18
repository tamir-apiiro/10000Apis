
const express = require('express')
import {handler4871} from "./handler4871";
const app = express()
app.get('/4871', handler4871)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4261} from "./handler4261";
const app = express()
app.get('/4261', handler4261)
app.listen(3000, () => {})
        
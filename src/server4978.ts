
const express = require('express')
import {handler4978} from "./handler4978";
const app = express()
app.get('/4978', handler4978)
app.listen(3000, () => {})
        
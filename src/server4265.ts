
const express = require('express')
import {handler4265} from "./handler4265";
const app = express()
app.get('/4265', handler4265)
app.listen(3000, () => {})
        
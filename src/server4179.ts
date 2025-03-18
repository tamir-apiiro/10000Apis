
const express = require('express')
import {handler4179} from "./handler4179";
const app = express()
app.get('/4179', handler4179)
app.listen(3000, () => {})
        
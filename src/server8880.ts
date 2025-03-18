
const express = require('express')
import {handler8880} from "./handler8880";
const app = express()
app.get('/8880', handler8880)
app.listen(3000, () => {})
        

const express = require('express')
import {handler8331} from "./handler8331";
const app = express()
app.get('/8331', handler8331)
app.listen(3000, () => {})
        
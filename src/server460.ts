
const express = require('express')
import {handler460} from "./handler460";
const app = express()
app.get('/460', handler460)
app.listen(3000, () => {})
        

const express = require('express')
import {handler8782} from "./handler8782";
const app = express()
app.get('/8782', handler8782)
app.listen(3000, () => {})
        
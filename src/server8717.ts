
const express = require('express')
import {handler8717} from "./handler8717";
const app = express()
app.get('/8717', handler8717)
app.listen(3000, () => {})
        
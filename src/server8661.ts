
const express = require('express')
import {handler8661} from "./handler8661";
const app = express()
app.get('/8661', handler8661)
app.listen(3000, () => {})
        
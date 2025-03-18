
const express = require('express')
import {handler8017} from "./handler8017";
const app = express()
app.get('/8017', handler8017)
app.listen(3000, () => {})
        
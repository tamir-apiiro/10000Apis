
const express = require('express')
import {handler8668} from "./handler8668";
const app = express()
app.get('/8668', handler8668)
app.listen(3000, () => {})
        
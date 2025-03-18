
const express = require('express')
import {handler8862} from "./handler8862";
const app = express()
app.get('/8862', handler8862)
app.listen(3000, () => {})
        

const express = require('express')
import {handler8631} from "./handler8631";
const app = express()
app.get('/8631', handler8631)
app.listen(3000, () => {})
        

const express = require('express')
import {handler8045} from "./handler8045";
const app = express()
app.get('/8045', handler8045)
app.listen(3000, () => {})
        
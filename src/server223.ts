
const express = require('express')
import {handler223} from "./handler223";
const app = express()
app.get('/223', handler223)
app.listen(3000, () => {})
        
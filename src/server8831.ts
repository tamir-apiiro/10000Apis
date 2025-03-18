
const express = require('express')
import {handler8831} from "./handler8831";
const app = express()
app.get('/8831', handler8831)
app.listen(3000, () => {})
        

const express = require('express')
import {handler7414} from "./handler7414";
const app = express()
app.get('/7414', handler7414)
app.listen(3000, () => {})
        

const express = require('express')
import {handler8989} from "./handler8989";
const app = express()
app.get('/8989', handler8989)
app.listen(3000, () => {})
        
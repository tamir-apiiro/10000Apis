
const express = require('express')
import {handler7763} from "./handler7763";
const app = express()
app.get('/7763', handler7763)
app.listen(3000, () => {})
        
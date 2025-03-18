
const express = require('express')
import {handler8568} from "./handler8568";
const app = express()
app.get('/8568', handler8568)
app.listen(3000, () => {})
        
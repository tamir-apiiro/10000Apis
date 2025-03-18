
const express = require('express')
import {handler2487} from "./handler2487";
const app = express()
app.get('/2487', handler2487)
app.listen(3000, () => {})
        
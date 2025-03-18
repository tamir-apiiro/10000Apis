
const express = require('express')
import {handler1487} from "./handler1487";
const app = express()
app.get('/1487', handler1487)
app.listen(3000, () => {})
        
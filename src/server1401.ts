
const express = require('express')
import {handler1401} from "./handler1401";
const app = express()
app.get('/1401', handler1401)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1505} from "./handler1505";
const app = express()
app.get('/1505', handler1505)
app.listen(3000, () => {})
        
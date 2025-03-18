
const express = require('express')
import {handler1223} from "./handler1223";
const app = express()
app.get('/1223', handler1223)
app.listen(3000, () => {})
        
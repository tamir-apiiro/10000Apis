
const express = require('express')
import {handler1752} from "./handler1752";
const app = express()
app.get('/1752', handler1752)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1222} from "./handler1222";
const app = express()
app.get('/1222', handler1222)
app.listen(3000, () => {})
        
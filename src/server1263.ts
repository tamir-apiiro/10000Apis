
const express = require('express')
import {handler1263} from "./handler1263";
const app = express()
app.get('/1263', handler1263)
app.listen(3000, () => {})
        
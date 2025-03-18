
const express = require('express')
import {handler1569} from "./handler1569";
const app = express()
app.get('/1569', handler1569)
app.listen(3000, () => {})
        
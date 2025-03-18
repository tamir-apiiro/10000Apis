
const express = require('express')
import {handler1584} from "./handler1584";
const app = express()
app.get('/1584', handler1584)
app.listen(3000, () => {})
        
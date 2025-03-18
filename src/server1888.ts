
const express = require('express')
import {handler1888} from "./handler1888";
const app = express()
app.get('/1888', handler1888)
app.listen(3000, () => {})
        
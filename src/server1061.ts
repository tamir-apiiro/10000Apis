
const express = require('express')
import {handler1061} from "./handler1061";
const app = express()
app.get('/1061', handler1061)
app.listen(3000, () => {})
        
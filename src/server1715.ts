
const express = require('express')
import {handler1715} from "./handler1715";
const app = express()
app.get('/1715', handler1715)
app.listen(3000, () => {})
        
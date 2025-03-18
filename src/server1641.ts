
const express = require('express')
import {handler1641} from "./handler1641";
const app = express()
app.get('/1641', handler1641)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1710} from "./handler1710";
const app = express()
app.get('/1710', handler1710)
app.listen(3000, () => {})
        
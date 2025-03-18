
const express = require('express')
import {handler1300} from "./handler1300";
const app = express()
app.get('/1300', handler1300)
app.listen(3000, () => {})
        
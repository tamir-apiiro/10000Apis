
const express = require('express')
import {handler1385} from "./handler1385";
const app = express()
app.get('/1385', handler1385)
app.listen(3000, () => {})
        
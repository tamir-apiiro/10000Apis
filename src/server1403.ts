
const express = require('express')
import {handler1403} from "./handler1403";
const app = express()
app.get('/1403', handler1403)
app.listen(3000, () => {})
        
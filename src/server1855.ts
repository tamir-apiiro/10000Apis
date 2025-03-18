
const express = require('express')
import {handler1855} from "./handler1855";
const app = express()
app.get('/1855', handler1855)
app.listen(3000, () => {})
        
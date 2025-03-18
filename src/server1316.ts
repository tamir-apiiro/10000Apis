
const express = require('express')
import {handler1316} from "./handler1316";
const app = express()
app.get('/1316', handler1316)
app.listen(3000, () => {})
        
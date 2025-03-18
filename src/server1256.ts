
const express = require('express')
import {handler1256} from "./handler1256";
const app = express()
app.get('/1256', handler1256)
app.listen(3000, () => {})
        
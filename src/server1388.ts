
const express = require('express')
import {handler1388} from "./handler1388";
const app = express()
app.get('/1388', handler1388)
app.listen(3000, () => {})
        
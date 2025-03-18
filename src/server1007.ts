
const express = require('express')
import {handler1007} from "./handler1007";
const app = express()
app.get('/1007', handler1007)
app.listen(3000, () => {})
        
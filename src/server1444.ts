
const express = require('express')
import {handler1444} from "./handler1444";
const app = express()
app.get('/1444', handler1444)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1609} from "./handler1609";
const app = express()
app.get('/1609', handler1609)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1797} from "./handler1797";
const app = express()
app.get('/1797', handler1797)
app.listen(3000, () => {})
        
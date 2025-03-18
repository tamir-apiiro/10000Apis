
const express = require('express')
import {handler1942} from "./handler1942";
const app = express()
app.get('/1942', handler1942)
app.listen(3000, () => {})
        
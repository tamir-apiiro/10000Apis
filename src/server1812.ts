
const express = require('express')
import {handler1812} from "./handler1812";
const app = express()
app.get('/1812', handler1812)
app.listen(3000, () => {})
        
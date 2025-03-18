
const express = require('express')
import {handler1520} from "./handler1520";
const app = express()
app.get('/1520', handler1520)
app.listen(3000, () => {})
        
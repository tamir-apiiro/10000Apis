
const express = require('express')
import {handler1265} from "./handler1265";
const app = express()
app.get('/1265', handler1265)
app.listen(3000, () => {})
        
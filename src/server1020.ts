
const express = require('express')
import {handler1020} from "./handler1020";
const app = express()
app.get('/1020', handler1020)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1449} from "./handler1449";
const app = express()
app.get('/1449', handler1449)
app.listen(3000, () => {})
        

const express = require('express')
import {handler1510} from "./handler1510";
const app = express()
app.get('/1510', handler1510)
app.listen(3000, () => {})
        
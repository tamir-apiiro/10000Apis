
const express = require('express')
import {handler1471} from "./handler1471";
const app = express()
app.get('/1471', handler1471)
app.listen(3000, () => {})
        
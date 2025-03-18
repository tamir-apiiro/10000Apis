
const express = require('express')
import {handler471} from "./handler471";
const app = express()
app.get('/471', handler471)
app.listen(3000, () => {})
        
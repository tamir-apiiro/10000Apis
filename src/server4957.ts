
const express = require('express')
import {handler4957} from "./handler4957";
const app = express()
app.get('/4957', handler4957)
app.listen(3000, () => {})
        
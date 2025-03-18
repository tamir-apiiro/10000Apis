
const express = require('express')
import {handler1386} from "./handler1386";
const app = express()
app.get('/1386', handler1386)
app.listen(3000, () => {})
        
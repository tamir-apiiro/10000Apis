
const express = require('express')
import {handler4386} from "./handler4386";
const app = express()
app.get('/4386', handler4386)
app.listen(3000, () => {})
        
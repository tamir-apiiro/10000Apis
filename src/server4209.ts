
const express = require('express')
import {handler4209} from "./handler4209";
const app = express()
app.get('/4209', handler4209)
app.listen(3000, () => {})
        
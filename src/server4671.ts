
const express = require('express')
import {handler4671} from "./handler4671";
const app = express()
app.get('/4671', handler4671)
app.listen(3000, () => {})
        
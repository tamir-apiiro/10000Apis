
const express = require('express')
import {handler4965} from "./handler4965";
const app = express()
app.get('/4965', handler4965)
app.listen(3000, () => {})
        
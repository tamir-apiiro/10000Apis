
const express = require('express')
import {handler4521} from "./handler4521";
const app = express()
app.get('/4521', handler4521)
app.listen(3000, () => {})
        
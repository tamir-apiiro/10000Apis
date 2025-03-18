
const express = require('express')
import {handler4677} from "./handler4677";
const app = express()
app.get('/4677', handler4677)
app.listen(3000, () => {})
        
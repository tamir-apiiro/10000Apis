
const express = require('express')
import {handler4715} from "./handler4715";
const app = express()
app.get('/4715', handler4715)
app.listen(3000, () => {})
        
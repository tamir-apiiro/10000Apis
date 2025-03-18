
const express = require('express')
import {handler4187} from "./handler4187";
const app = express()
app.get('/4187', handler4187)
app.listen(3000, () => {})
        
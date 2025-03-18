
const express = require('express')
import {handler4454} from "./handler4454";
const app = express()
app.get('/4454', handler4454)
app.listen(3000, () => {})
        
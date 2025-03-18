
const express = require('express')
import {handler4739} from "./handler4739";
const app = express()
app.get('/4739', handler4739)
app.listen(3000, () => {})
        
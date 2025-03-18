
const express = require('express')
import {handler4019} from "./handler4019";
const app = express()
app.get('/4019', handler4019)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4692} from "./handler4692";
const app = express()
app.get('/4692', handler4692)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4460} from "./handler4460";
const app = express()
app.get('/4460', handler4460)
app.listen(3000, () => {})
        
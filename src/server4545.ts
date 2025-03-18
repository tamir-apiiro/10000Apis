
const express = require('express')
import {handler4545} from "./handler4545";
const app = express()
app.get('/4545', handler4545)
app.listen(3000, () => {})
        
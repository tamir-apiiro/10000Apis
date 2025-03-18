
const express = require('express')
import {handler4398} from "./handler4398";
const app = express()
app.get('/4398', handler4398)
app.listen(3000, () => {})
        
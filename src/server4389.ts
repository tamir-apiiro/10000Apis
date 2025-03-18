
const express = require('express')
import {handler4389} from "./handler4389";
const app = express()
app.get('/4389', handler4389)
app.listen(3000, () => {})
        
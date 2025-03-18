
const express = require('express')
import {handler4177} from "./handler4177";
const app = express()
app.get('/4177', handler4177)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4536} from "./handler4536";
const app = express()
app.get('/4536', handler4536)
app.listen(3000, () => {})
        
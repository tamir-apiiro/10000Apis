
const express = require('express')
import {handler4599} from "./handler4599";
const app = express()
app.get('/4599', handler4599)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4182} from "./handler4182";
const app = express()
app.get('/4182', handler4182)
app.listen(3000, () => {})
        
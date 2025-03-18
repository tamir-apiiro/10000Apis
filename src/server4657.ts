
const express = require('express')
import {handler4657} from "./handler4657";
const app = express()
app.get('/4657', handler4657)
app.listen(3000, () => {})
        
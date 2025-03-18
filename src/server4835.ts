
const express = require('express')
import {handler4835} from "./handler4835";
const app = express()
app.get('/4835', handler4835)
app.listen(3000, () => {})
        
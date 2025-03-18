
const express = require('express')
import {handler4340} from "./handler4340";
const app = express()
app.get('/4340', handler4340)
app.listen(3000, () => {})
        
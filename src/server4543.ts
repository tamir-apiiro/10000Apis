
const express = require('express')
import {handler4543} from "./handler4543";
const app = express()
app.get('/4543', handler4543)
app.listen(3000, () => {})
        
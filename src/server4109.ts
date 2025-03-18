
const express = require('express')
import {handler4109} from "./handler4109";
const app = express()
app.get('/4109', handler4109)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4005} from "./handler4005";
const app = express()
app.get('/4005', handler4005)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4383} from "./handler4383";
const app = express()
app.get('/4383', handler4383)
app.listen(3000, () => {})
        
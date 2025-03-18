
const express = require('express')
import {handler4232} from "./handler4232";
const app = express()
app.get('/4232', handler4232)
app.listen(3000, () => {})
        
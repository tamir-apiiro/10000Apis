
const express = require('express')
import {handler4890} from "./handler4890";
const app = express()
app.get('/4890', handler4890)
app.listen(3000, () => {})
        
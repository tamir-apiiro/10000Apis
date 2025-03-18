
const express = require('express')
import {handler4342} from "./handler4342";
const app = express()
app.get('/4342', handler4342)
app.listen(3000, () => {})
        
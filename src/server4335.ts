
const express = require('express')
import {handler4335} from "./handler4335";
const app = express()
app.get('/4335', handler4335)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4094} from "./handler4094";
const app = express()
app.get('/4094', handler4094)
app.listen(3000, () => {})
        
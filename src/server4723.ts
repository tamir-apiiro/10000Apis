
const express = require('express')
import {handler4723} from "./handler4723";
const app = express()
app.get('/4723', handler4723)
app.listen(3000, () => {})
        
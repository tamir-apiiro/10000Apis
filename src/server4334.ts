
const express = require('express')
import {handler4334} from "./handler4334";
const app = express()
app.get('/4334', handler4334)
app.listen(3000, () => {})
        
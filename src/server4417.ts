
const express = require('express')
import {handler4417} from "./handler4417";
const app = express()
app.get('/4417', handler4417)
app.listen(3000, () => {})
        
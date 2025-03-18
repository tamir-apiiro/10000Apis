
const express = require('express')
import {handler4339} from "./handler4339";
const app = express()
app.get('/4339', handler4339)
app.listen(3000, () => {})
        
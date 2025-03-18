
const express = require('express')
import {handler4592} from "./handler4592";
const app = express()
app.get('/4592', handler4592)
app.listen(3000, () => {})
        
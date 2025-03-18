
const express = require('express')
import {handler4907} from "./handler4907";
const app = express()
app.get('/4907', handler4907)
app.listen(3000, () => {})
        
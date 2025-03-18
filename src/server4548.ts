
const express = require('express')
import {handler4548} from "./handler4548";
const app = express()
app.get('/4548', handler4548)
app.listen(3000, () => {})
        
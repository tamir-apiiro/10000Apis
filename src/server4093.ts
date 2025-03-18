
const express = require('express')
import {handler4093} from "./handler4093";
const app = express()
app.get('/4093', handler4093)
app.listen(3000, () => {})
        
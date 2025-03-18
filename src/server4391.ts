
const express = require('express')
import {handler4391} from "./handler4391";
const app = express()
app.get('/4391', handler4391)
app.listen(3000, () => {})
        
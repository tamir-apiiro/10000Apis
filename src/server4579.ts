
const express = require('express')
import {handler4579} from "./handler4579";
const app = express()
app.get('/4579', handler4579)
app.listen(3000, () => {})
        
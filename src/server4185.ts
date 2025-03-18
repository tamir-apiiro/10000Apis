
const express = require('express')
import {handler4185} from "./handler4185";
const app = express()
app.get('/4185', handler4185)
app.listen(3000, () => {})
        
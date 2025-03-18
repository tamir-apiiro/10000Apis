
const express = require('express')
import {handler2892} from "./handler2892";
const app = express()
app.get('/2892', handler2892)
app.listen(3000, () => {})
        

const express = require('express')
import {handler4670} from "./handler4670";
const app = express()
app.get('/4670', handler4670)
app.listen(3000, () => {})
        
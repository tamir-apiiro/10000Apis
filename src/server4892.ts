
const express = require('express')
import {handler4892} from "./handler4892";
const app = express()
app.get('/4892', handler4892)
app.listen(3000, () => {})
        
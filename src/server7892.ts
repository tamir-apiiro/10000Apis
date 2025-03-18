
const express = require('express')
import {handler7892} from "./handler7892";
const app = express()
app.get('/7892', handler7892)
app.listen(3000, () => {})
        
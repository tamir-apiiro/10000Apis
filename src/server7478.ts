
const express = require('express')
import {handler7478} from "./handler7478";
const app = express()
app.get('/7478', handler7478)
app.listen(3000, () => {})
        
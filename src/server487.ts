
const express = require('express')
import {handler487} from "./handler487";
const app = express()
app.get('/487', handler487)
app.listen(3000, () => {})
        
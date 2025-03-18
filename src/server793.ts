
const express = require('express')
import {handler793} from "./handler793";
const app = express()
app.get('/793', handler793)
app.listen(3000, () => {})
        
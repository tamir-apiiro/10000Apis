
const express = require('express')
import {handler7793} from "./handler7793";
const app = express()
app.get('/7793', handler7793)
app.listen(3000, () => {})
        
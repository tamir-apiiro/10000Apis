
const express = require('express')
import {handler3374} from "./handler3374";
const app = express()
app.get('/3374', handler3374)
app.listen(3000, () => {})
        
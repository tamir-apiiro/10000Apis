
const express = require('express')
import {handler3614} from "./handler3614";
const app = express()
app.get('/3614', handler3614)
app.listen(3000, () => {})
        
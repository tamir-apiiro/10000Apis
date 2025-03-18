
const express = require('express')
import {handler3752} from "./handler3752";
const app = express()
app.get('/3752', handler3752)
app.listen(3000, () => {})
        
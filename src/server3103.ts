
const express = require('express')
import {handler3103} from "./handler3103";
const app = express()
app.get('/3103', handler3103)
app.listen(3000, () => {})
        
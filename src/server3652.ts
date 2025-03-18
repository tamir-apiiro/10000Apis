
const express = require('express')
import {handler3652} from "./handler3652";
const app = express()
app.get('/3652', handler3652)
app.listen(3000, () => {})
        
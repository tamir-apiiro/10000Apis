
const express = require('express')
import {handler3687} from "./handler3687";
const app = express()
app.get('/3687', handler3687)
app.listen(3000, () => {})
        